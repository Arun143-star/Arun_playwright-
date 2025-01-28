const{test,expect}=require('@playwright/test');
test('dropdown',async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='oldSelectMenu']").selectOption("Purple");//By Text &  Value Same
    await page.waitForTimeout(3000);  
    await page.locator("//select[@id='oldSelectMenu']").selectOption({index:1});//By Index
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='oldSelectMenu']",'Green');//Alternative Method
    await page.waitForTimeout(4000);
    
    
})