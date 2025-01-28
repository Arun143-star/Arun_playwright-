const{test,expect}=require('@playwright/test');
test('inbuilt',async({page})=>{
    await page.goto('https://www.google.com/search');
    await page.getByPlaceholder();
    await page.getByAltText();
    await page.getByLabel();
    await page.getByTestId();
    

})