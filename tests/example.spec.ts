import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({
  page,
}) => {
  await page.goto('http://localhost:8080/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React Typescript Starter/);

  // create a locator
  const getStarted = page.locator('text=React Typescript Starter');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toBeDefined();
});
