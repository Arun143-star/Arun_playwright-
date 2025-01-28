const{test,expect}=require('@playwright/test');
test('asseration',async({page})=>{
        await expect(page).toHaveURL("https://demoblaze.com/");
        await expect.soft(page).to
})