import React, { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./ResumePage.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_PAGE_W = 612;
const PDF_PAGE_H = 792;
const MOBILE_BREAKPOINT = 768;
const DIM_EPS = 4;
/* Fallback when rects are not ready; mirrors ResumePage.css (.pdf-toolbar bottom + pill height, mobile + safe-area via padding). */
const TOOLBAR_RESERVE_FALLBACK_DESKTOP = 68;
const TOOLBAR_RESERVE_FALLBACK_MOBILE = 88;

function toolbarOverlapReservePx(wrapper, toolbarEl) {
  if (!toolbarEl) return null;
  const wr = wrapper.getBoundingClientRect();
  const tr = toolbarEl.getBoundingClientRect();
  const top = Math.max(wr.top, tr.top);
  const bot = Math.min(wr.bottom, tr.bottom);
  const overlap = Math.max(0, bot - top);
  if (overlap < 1) return null;
  return Math.round(overlap + 4);
}

function ResumePage() {
  const [numPages, setNumPages] = useState(null);
  const [fitScale, setFitScale] = useState(1.2);
  const [zoomBias, setZoomBias] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const wrapperRef = useRef(null);
  const toolbarRef = useRef(null);
  const lastFitDimsRef = useRef({ w: -1, h: -1 });
  const panRef = useRef({
    active: false,
    pointerId: null,
    originX: 0,
    originY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const updateFitScale = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cs = getComputedStyle(wrapper);
    const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const bw =
      parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    const bh = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
    /* offset* is stable when scrollbars appear; client* shrinks and was retriggering fit + zoom reset */
    const availW = Math.max(0, wrapper.offsetWidth - padX - bw);
    const availH = Math.max(0, wrapper.offsetHeight - padY - bh);

    const prev = lastFitDimsRef.current;
    const dimsChanged =
      prev.w < 0 ||
      Math.abs(availW - prev.w) > DIM_EPS ||
      Math.abs(availH - prev.h) > DIM_EPS;

    if (!dimsChanged) return;

    const measured = toolbarOverlapReservePx(wrapper, toolbarRef.current);
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const toolbarReserve =
      measured ??
      (isMobile ? TOOLBAR_RESERVE_FALLBACK_MOBILE : TOOLBAR_RESERVE_FALLBACK_DESKTOP);

    let s;
    if (isMobile) {
      const usableH = Math.max(120, availH - toolbarReserve);
      s = Math.min(availW / PDF_PAGE_W, usableH / PDF_PAGE_H);
      setFitScale(Math.max(0.35, Math.min(2.2, Math.round(s * 100) / 100)));
    } else {
      const h = Math.max(40, availH - toolbarReserve);
      s = Math.min(availW / PDF_PAGE_W, h / PDF_PAGE_H);
      setFitScale(Math.max(0.55, Math.min(2.6, Math.round(s * 100) / 100)));
    }

    setZoomBias(0);
    lastFitDimsRef.current = { w: availW, h: availH };
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      setScrollable(
        el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2
      );
    });
    return () => cancelAnimationFrame(id);
  }, [numPages, fitScale, zoomBias]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ro = new ResizeObserver(() => updateFitScale());
    ro.observe(wrapper);
    const toolbar = toolbarRef.current;
    if (toolbar) ro.observe(toolbar);
    const viewer = wrapper.closest(".resume-viewer-container");
    if (viewer) ro.observe(viewer);

    updateFitScale();

    const onWindowResize = () => {
      lastFitDimsRef.current = { w: -1, h: -1 };
      updateFitScale();
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWindowResize);
    };
  }, [updateFitScale]);

  function onDocumentLoadSuccess({ numPages: n }) {
    setNumPages(n);
    lastFitDimsRef.current = { w: -1, h: -1 };
    requestAnimationFrame(() => updateFitScale());
  }

  const effectiveScale = Math.min(3, Math.max(0.4, fitScale + zoomBias));

  const zoomIn = () =>
    setZoomBias((b) => Math.min(3 - fitScale, Math.round((b + 0.12) * 100) / 100));
  const zoomOut = () =>
    setZoomBias((b) => Math.max(0.4 - fitScale, Math.round((b - 0.12) * 100) / 100));

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    /* Touch: keep native scrolling / momentum; mouse & pen: drag to pan */
    if (e.pointerType === "touch") return;
    const el = wrapperRef.current;
    if (!el) return;
    panRef.current = {
      active: true,
      pointerId: e.pointerId,
      originX: e.clientX,
      originY: e.clientY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    el.classList.add("is-panning");
  };

  const handlePointerMove = (e) => {
    const p = panRef.current;
    if (!p.active || e.pointerId !== p.pointerId) return;
    const el = wrapperRef.current;
    if (!el) return;
    el.scrollLeft = p.scrollLeft - (e.clientX - p.originX);
    el.scrollTop = p.scrollTop - (e.clientY - p.originY);
  };

  const endPan = (e) => {
    const p = panRef.current;
    if (!p.active) return;
    if (e?.pointerId != null && e.pointerId !== p.pointerId) return;
    const el = wrapperRef.current;
    if (el) {
      try {
        if (p.pointerId != null) el.releasePointerCapture(p.pointerId);
      } catch {
        /* ignore */
      }
      el.classList.remove("is-panning");
    }
    p.active = false;
    p.pointerId = null;
  };

  return (
    <div className="resume-page-container content-container">
      <div className="resume-header">
        <h2>RÉSUMÉ</h2>
        <p className="resume-subtitle">
          Printable one-page PDF · same content as the experience page, formatted for sharing
        </p>
      </div>

      <div className="resume-viewer-container glass-panel">
        <div className="pdf-toolbar" ref={toolbarRef}>
          <button type="button" onClick={zoomOut} className="pdf-btn" aria-label="Zoom Out" title="Zoom Out">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <span className="pdf-zoom-level">{Math.round(effectiveScale * 100)}%</span>
          <button type="button" onClick={zoomIn} className="pdf-btn" aria-label="Zoom In" title="Zoom In">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <div className="pdf-toolbar-divider" />

          <a
            href="/DeFord_Resume_2026_software-2.pdf"
            download
            className="pdf-btn"
            aria-label="Download PDF"
            title="Download PDF"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        <div
          className={`pdf-document-wrapper${scrollable ? " pdf-document-wrapper--scrollable" : ""}`}
          ref={wrapperRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endPan}
          onPointerCancel={endPan}
          onLostPointerCapture={endPan}
        >
          <div className="pdf-document-surface">
            <Document
              file="/DeFord_Resume_2026_software-2.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="pdf-loading">Loading PDF...</div>}
            >
              {numPages
                ? Array.from({ length: numPages }, (_el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={effectiveScale}
                  className="pdf-page"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                  ))
                : null}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
