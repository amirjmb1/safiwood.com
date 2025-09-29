import { test, expect } from '@playwright/test';

test('open gallery lightbox', async ({ page }) => {
  await page.goto('/gallery');
  await page.getByRole('button', { name: /نمونه/ }).first().click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await page.getByRole('button', { name: 'بستن' }).click();
  await expect(dialog).toHaveCount(0);
});
