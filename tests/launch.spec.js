const{test,expect}=require('@playwright/test');
test('launch insta',async({page})=>{
    await page.goto('https://www.instagram.com/');
})

const{test,expect}=require('@playwright/test');
test('epfo member home page go successfully',async ({page}) => {
 await page.goto('https://www.epfomemberhome.com/'); 
 await page.goto('https://www.facebook.com/');
})


    
