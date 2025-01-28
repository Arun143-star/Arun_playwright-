const{test,expect}=require('@playwright/test');
test('multipledropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(4000);
    let countries = await page.$$('//select[@id="country"]//child::option');
    await page.waitForTimeout(3000);
    // let countries=await page.$$("//select[@id='country']//child::option/value['uk']")
    // await page.waitForTimeout(3000);

    for (let country of countries){
        let data =await country.textContent();
        console.log(data);

        
    }


})