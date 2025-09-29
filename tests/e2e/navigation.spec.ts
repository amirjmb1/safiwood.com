import { test, expect } from '@playwright/test';

test('navigate between pages', async ({ page }) => {
  await page.goto('/');
  const header = page.getByRole('banner');
  await header.getByRole('link', { name: 'درباره ما' }).click();
  await expect(page).toHaveURL(/about/);
  await header.getByRole('link', { name: 'نمونه‌کارها' }).click();
  await expect(page).toHaveURL(/gallery/);
});
