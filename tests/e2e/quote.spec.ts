import { test, expect } from '@playwright/test';

test('submit quote form', async ({ page }) => {
  await page.goto('/quote');
  await page.getByPlaceholder('مثال: علیرضا صفی').fill('علی صفی');
  await page.getByPlaceholder('مثال: 0913xxxxxxx').fill('09130000000');
  await page.getByRole('button', { name: 'مرحله بعد' }).click();
  await page.getByLabel('متراژ فضا (متر مربع)').fill('25');
  await page.getByRole('button', { name: 'مرحله بعد' }).click();
  await page.getByRole('button', { name: 'ارسال درخواست' }).click();
  await expect(
    page.getByText('درخواست شما با موفقیت ارسال شد', { exact: false }),
  ).toBeVisible();
});
