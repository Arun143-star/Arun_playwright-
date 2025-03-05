class loginpage{
  constructor(page){
    this.page=page;
    this.username=("//input[@type='text']");
    this.password=("//input[@type='password']");
    this.loginaAK=("//input[@type='submit']");
     this.logo="//div[normalize-space()='Sauce Labs Backpack']".
  };
  async login(username,password){
  await this.page.fill(this.username,username);
  await this.page.fill(this.password,password);
  await this.page.click(this.loginaAK);

  };
   async navigateTologinpage(){
    await page.goto("https://www.saucedemo.com/v1/")
   }





}module.exports={loginpage};

