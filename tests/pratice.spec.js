const{test,expect}=require('@playwright/test');
test('pratice',async({page})=>{
await page.goto("https://www.facebook.com/login/");
await page.waitForTimeout(2000);
await page.locator("//a[@rel='nofollow']").click();
await page.locator('//input[@name="firstname"]').fill('Arun');
await page.locator('//input[@name="lastname"]').fill('Krishnan');
await page.waitForTimeout(2000);
await page.selectOption("//select[@id='day']",'28')
await page.waitForTimeout(2000);
await page.selectOption("//select[@id='month']",'Dec')
await page.waitForTimeout(2000);
await page.selectOption("//select[@id='year']","1999");
await page.waitForTimeout(2000);
await page.locator("(//select[@type='radio'])[2]").check();
await page.waitForTimeout(2000);
await page.selectOption("//select[@type='text']",'9092829405');
await page.waitForTimeout(2000);
await page.selectOption("//select[@type='password']","Arun@1234");
await page.waitForTimeout(2000);
await page.pause();




})