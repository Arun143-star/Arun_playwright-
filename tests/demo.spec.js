const{test,except}=require('@playwright/test');
test('page intreaction',async({page})=>{

    await page.goto('https://unifiedportal-mem.epfindia.gov.in/memberinterface/');
    await page.waitForTimeout(4000);

    await page.locator('id=userName').fill('101473947006');
    await page.locator('id=password').fill('Riya@2007');
    await page.pause();
    // await page.fill('id=username','101473947006');
    // await page.fill('id=password','Riya@2007');
    // await page.waitForTimeout(3000);


});
    