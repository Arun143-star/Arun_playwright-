const {test, expect} = require('@playwright/test');

test('frame', async({page}) =>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.waitForTimeout(5000);

    let frame = await page.frames();
    console.log(frame.length);

    let enterdetailsFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    await enterdetailsFrame.fill("//input[@name='mytext1']", "Sanjay");

    await page.waitForTimeout(2000);


    let enterdetails = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});

    await enterdetails.fill("//input[@name='mytext2']", "Dinesh")

    await page.waitForTimeout(2000)

    let enterFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    await enterFrame.fill("//input[@name='mytext3']", "Narish")

    await page.waitForTimeout(4000)

    let detailsFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'});

    await detailsFrame.fill("//input[@name='mytext4']", "Arun")

})