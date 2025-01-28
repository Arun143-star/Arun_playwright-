const{test,expect}=require('@playwright/test');
test('xpath',async({page}=>){
    await page.goto('https://en-gb.facebook.com/login/web/');
    await page.locator("//input[type='text']").fill(arunkrishnan2812);
    await page.waitForTimeout(30000);
})