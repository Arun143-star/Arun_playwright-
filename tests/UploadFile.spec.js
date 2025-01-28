const{test,expect}=require('@playwright/test');
test('upload test',async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //Singlr File:
    await page.locator("//input[@type='file']").setInputFiles('E:/Homework/advMethod.js');
    await page.waitForTimeout(3000);


    //Multiple File:
    await page.locator("//input[@type='file']").setInputFiles(['E:/Homework/advMethod.js','E:/Homework/class.js','E:HomeWork/datatypes.js']);
    await page.waitForTimeout(3000);


    //Remove Upload Files:
    await page.locator("//input[@type='file']").setInputFiles([]);
    await page.waitForTimeout(3000);


});
