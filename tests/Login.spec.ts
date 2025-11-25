import { expect, test } from '@playwright/test';
import { error } from 'console';

test.describe('Login testes', async () => {

    test('Login com sucesso', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await expect(await page.title()).toBe('Swag Labs');

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

        await expect(await page.locator('[data-test="title"]')).toHaveText('Products');
    })

    test('Usuário inseri credenciais inválidas', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');

        await page.locator('[data-test="username"]').fill('invalid_user');
        await page.locator('[data-test="password"]').fill('invalid_password');

        await page.locator('[data-test="login-button"]').click();

        const errorTest = page.getByText('Epic sadface: Username and password do not match any user in this service');

        await expect(errorTest).toBeVisible();
    });
})