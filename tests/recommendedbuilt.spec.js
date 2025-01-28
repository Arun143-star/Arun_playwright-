const{test,expect}=require('@playwright/test');
test('amazon',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator("//input[@type='text']").fill("laptop")
    await page.waitForTimeout(3000);
    await page.click();


    

})
