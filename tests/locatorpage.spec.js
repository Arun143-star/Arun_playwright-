
const{test,expect}=require('@playwright/test');
test(' automotion',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForTimeout(3000);
    await page.locator('id=username').fill('student'); //await page.fill('id=username','student')
    await page.locator('id=password').fill('Password123'); //await page.fill('id=password','Password123')
    await page.waitForTimeout(3000);
    await page.locator('id=sumbit').click();
    await page.waitForTimeout(3000);

});


