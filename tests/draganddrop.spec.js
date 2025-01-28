const{test,expect}=require('@playwright/test');

test('draganddrop',async({page})=>{
    await page.goto("https://www.w3schools.com/");
    await page.waitForTimeout(2000);

     await page.dragAndDrop("//div[@id='div1']","//div[@id='div2']");
     await page.waitForTimeout(3000);
    console.log();
    
});



const {test, expect} = require('@playwright/test');

test('drag and drop', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(5000);

    await page.mouse.wheel(0,1400)

    //let source = await page.locator("//div[@id='draggable']")
    //let target = await page.locator("//div[@id='droppable']")
    // await source.dragto(source);
    // await page.dragAndDrop('#Source','#target')

    await page.waitForTimeout(3000);

    await page.dragAndDrop("//div[@id='draggable']","//div[@id='droppable']")

    await page.waitForTimeout(3000);
    
//# Right #//
    await page.click('locator' , {button:'right'});

})