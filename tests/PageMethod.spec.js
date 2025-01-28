const{test,except}=require('@playwright/test');
const { log } = require('console');
const { title } = require('process');
test('page Intructions',async({page})=>{
  await page.goto('https://www.instagram.com/');
  await page.goto('https://www.facebook.com/');
  await page.goto('https://www.epfomember.com/');
  await page.goBack();
  await page.waitForTimeout(3000);
  await page.goForward();

  let CurrrentUrl= await page.url();
  console.log(CurrrentUrl);

  let currentitle=await page.title();
  console.log(currentitle);
  // await page.pause();8
  
  
await page.goto('https://www.facebook.com/');
await page.waitForTimeout(3000);
await page.locator('id=email').fill('Arun');
await page.fill('id=email',909282);
await [page.waitForTimeout(3000);
await page 

]



})