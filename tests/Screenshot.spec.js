const{test,expect}=require('@playwright/test');
test('screenshot',async({page})=>{
    await page.goto("https://www.myntra.com/");
    await page.waitForTimeout(3000);

    await page.screenshot({path:'test-results/screenshot/fullPage.jpg',fullPage:true});
    await page.waitForTimeout(3000);

    await page.screenshot({path:'test-results/screenshot/'+Date.now()+'myntra.jpg'})
    await page.waitForTimeout(2000);
    
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(10000);

    await page.locator("//a[contains(@id,'logo')]").screenshot({path:'screenshot/'+ Date.now() +'Amazonlogo.jpg'})


})