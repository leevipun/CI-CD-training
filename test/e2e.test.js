import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await expect(page.locator('#app')).toContainText('bulbasaur');
    await expect(page.getByRole('link', { name: 'bulbasaur' })).toBeVisible();
    await page.getByRole('link', { name: 'bulbasaur' }).click();
    await expect(page.getByText('bulbasaur')).toBeVisible();
    await page.getByRole('cell', { name: 'speed' }).click();
    await page.getByRole('cell', { name: '45' }).first().click();
    await page.locator('.pokemon-image').click();
    await page.getByText('overgrow').click();
    await page.getByText('chlorophyll').click();
    await page.getByRole('link', { name: 'Next' }).click();
    await page.locator('.pokemon-image').click();
    await page.getByText('ivysaur').click();
    await page.getByRole('table').click();
    await page.getByRole('link', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'raichu' }).click();
    await page.getByText('raichu').click();
    await page.getByRole('link', { name: 'Previous' }).click();
    await page.getByText('pikachu').click();
    await page.locator('.pokemon-image').click();
});