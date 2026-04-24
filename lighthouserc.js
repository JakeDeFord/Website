/**
 * Lighthouse CI — audits the production build as a static SPA.
 * Form factor (desktop vs mobile) is set via npm scripts / workflow flags.
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      isSinglePageApplication: true,
      numberOfRuns: 2,
      url: ['/', '/experience', '/projects', '/resume', '/contact'],
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.85 }],
        'categories:best-practices': ['warn', { minScore: 0.75 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
        // Portfolio pages (particles, PDF viewer) are often heavy; keep performance as advisory
        'categories:performance': ['warn', { minScore: 0.45 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
  },
};
