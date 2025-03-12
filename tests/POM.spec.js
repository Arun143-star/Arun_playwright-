const{test,expect}=require('@playwright/test');
const{loginpage}=require('../Pages/login');
test("browser",async({page})=>{
    const a =new loginpage(page);
    
})
