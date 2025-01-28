const{test,expect}=require('@playwright/test');
test('screenshot',async({page})=>{
    await page.goto('https://www.google.com/search?q=')
})