import { expect, test } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(await page.title()).toBe('Swag Labs');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

    await expect(await page.locator('[data-test="title"]')).toHaveText('Products');

    await page.pause();
})

test('Usuário inseri credenciais inválidas', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.pause();
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('invalid_password');

    await page.locator('[data-test="login-button"]').click();

    await expect(await page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});