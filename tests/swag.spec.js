const{test,expect}=require('@playwright/test');
test("swaglab",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/");
await page.setDefaultTimeout(5000);
await page.locator("//input[@type='text']").fill("standard_user");
await page.locator("//input[@type='password']").fill("secret_sauce");
await page.click("//input[@type='submit']")
await page.locator("//div[normalize-space()='Sauce Labs Backpack']").click();
await page.locator("(//button[normalize-space()='ADD TO CART'])[1]").click();
await page.click("path[fill='currentColor']");
await page.locator('//a[@class="btn_action checkout_button"]').click();
await page.locator("//input[@id='first-name']").fill("Arun");
await page.locator("//input[@id='last-name']").fill("Krishnan");
await page.locator("//input[@id='postal-code']").fill("636808");
await page.click("//input[@type='submit']");
await page.waitForTimeout(3000);
await page.click("//a[@class='btn_action cart_button']");
await page.waitForTimeout(3000);
await page.screenshot({path:"screenshot/arun"+'arun.png'});

}) 




