const{test,expect}=require('@playwright/test');
test('latenight',async({page})=>{
    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(3000);
    await page.locator("//input[@type='text']").fill("watch");
    await page.locator("//input[@type='submit']");
    await page.waitForTimeout(3000);
    await page.click("//input[@type='submit']");
    await page.click("//img[@class='s-image']");
    await page.waitForTimeout(3000);
    await page.waitForSelector("//input[@id='add-to-cart-button']").click();
    await page.locator("//a[@href='/cart?ref_=sw_gtc']").click();
    await page.waitForTimeout(3000);
    


    
   



    

})