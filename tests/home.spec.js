const { test, expect } = require('@playwright/test');

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/');
  });

  test('should display the correct brand name in the header', async ({ page }) => {
    const brandName = page.locator('.brand a');
    await expect(brandName).toBeVisible();
    await expect(brandName).toHaveText('Jake DeFord');
  });

  test('should display the Hero section', async ({ page }) => {
    const heroTitle = page.locator('.hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('ENGINEERING');
    await expect(heroTitle).toContainText('REAL-TIME');
    await expect(heroTitle).toContainText('SYSTEMS');

    const primaryBtn = page.locator('.hero-section .hero-actions .btn-primary');
    await expect(primaryBtn).toBeVisible();
    await expect(primaryBtn).toHaveText('VIEW EXPERIENCE');
  });

  test('should display all Core Competencies cards', async ({ page }) => {
    const skillsCards = page.locator('.skill-card');
    await expect(skillsCards).toHaveCount(3);
    
    // Check titles of the cards
    const titles = ['FPGA & EMBEDDED', 'FULL-STACK ARCHITECTURE', 'SYSTEMS AUTOMATION'];
    for (let i = 0; i < 3; i++) {
      await expect(skillsCards.nth(i).locator('h3')).toHaveText(titles[i]);
    }
  });

  test('should display the Contact callout section', async ({ page }) => {
    const contactCallout = page.locator('.home-contact-info h2');
    await expect(contactCallout).toBeVisible();
    await expect(contactCallout).toHaveText('WANT TO LEARN MORE?');

    const talkBtn = page.locator('.home-contact-card .btn-primary');
    await expect(talkBtn).toBeVisible();
    await expect(talkBtn).toHaveText("VIEW RESUME");
  });
});

test.describe('Navigation - Desktop vs Mobile', () => {
  test('desktop should show standard navigation links', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Skipping on mobile viewports');
    
    await page.goto('/');
    
    const navLinks = page.locator('.nav-menu.desktop .nav-links li');
    await expect(navLinks).toHaveCount(4);
    await expect(page.locator('.menu-button')).toBeHidden();
  });

  test('mobile should hide standard links and show hamburger menu', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Skipping on desktop viewports');
    
    await page.goto('/');
    
    // Desktop menu should be hidden
    await expect(page.locator('.nav-menu.desktop')).toBeHidden();
    
    // Hamburger button should be visible
    const menuButton = page.locator('.menu-button');
    await expect(menuButton).toBeVisible();
    
    // Open the menu
    await menuButton.click();
    
    // Mobile menu should become visible
    const mobileMenu = page.locator('.nav-menu.mobile');
    await expect(mobileMenu).toHaveClass(/open/);
    
    const mobileLinks = mobileMenu.locator('.nav-links li');
    await expect(mobileLinks).toHaveCount(4);
  });
});
