const { test, expect } = require('@playwright/test');

test.describe('Secondary Pages Desktop', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('Résumé (PDF) Page', async ({ page }) => {
    await page.goto('/resume');
    await expect(page.locator('h2', { hasText: 'RÉSUMÉ' })).toBeVisible();
    await expect(page.locator('.pdf-document-wrapper')).toBeVisible();

    await page.locator('.resume-viewer-container').hover();
    await expect(page.locator('a[title="Download PDF"]')).toBeVisible();
  });

  test('Experience (HTML) Page', async ({ page }) => {
    await page.goto('/experience');
    await expect(page.locator('h1', { hasText: 'EXPERIENCE' })).toBeVisible();
    await expect(page.getByText('Lumetrics, Inc.')).toBeVisible();
    await expect(page.getByText('Mastodon Design')).toBeVisible();
  });

  test('Alias routes redirect to projects', async ({ page }) => {
    await page.goto('/stack');
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.locator('h2', { hasText: 'THE STACK' })).toBeVisible();
  });

  test('Stack (Projects) Page', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.locator('h2', { hasText: 'THE STACK' })).toBeVisible();
    await expect(page.locator('.project-card').first()).toBeVisible();
    await expect(page.locator('.project-card')).toHaveCount(3);
  });

  test('Contact Page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h2', { hasText: 'CONTACT ME' })).toBeVisible();
    await expect(page.locator('text=jdeford199@gmail.com')).toBeVisible();
  });
});

test.describe('Secondary Pages Mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('Mobile navigation to Stack Page', async ({ page }) => {
    await page.goto('/');
    
    // Open hamburger menu
    await page.click('.menu-button');
    
    // Stack page link in nav (distinct from "VIEW STACK" CTAs)
    await page.getByRole('navigation').getByRole('link', { name: /stack & projects/i }).click();
    
    // Verify URL
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.locator('h2', { hasText: 'THE STACK' })).toBeVisible();
  });
});
