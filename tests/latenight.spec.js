const{test,expect}=require('@playwright/test');
test('latenight',async({page})=>{
    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(3000);
    await page.locator("//input[@type='text']").fill("watch");
    await page.locator("//input[@type='submit']");
    await page.waitForTimeout(6000);
    await page.locator("//img[@class='s-image']").click();

    


    


    
   



    

})