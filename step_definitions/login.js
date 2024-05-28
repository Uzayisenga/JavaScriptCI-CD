// const { Builder, until, By } = require('selenium-webdriver');
// const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// const RegisterPage = require('../PageObjects/RegisterPage');
// const assert = require('assert');
// // Set default timeout to 60 seconds
// setDefaultTimeout(60 * 1000);

// let driver;
// let registerPage;

// async function closePopups() {
//     try {
//         // Example: Close any pop-up with a specific class or ID
//         const popupCloseButton = await driver.findElement(By.css('.close-popup'));
//         if (popupCloseButton) {
//             await popupCloseButton.click();
//         }
//     } catch (error) {
//         // Pop-up not found, continue with the test
//     }
// }
//          When('A user navigate to visit loginPage', async function () {
//             driver = new Builder().forBrowser('firefox').build();
//             registerPage = new RegisterPage(driver);
//             await driver.get('https://demo.guru99.com/V1/index.php');
//             await registerPage.navigateToLoginPage();
//          });


//          When('the user enter the UID', async function () {
//             registerPage = new RegisterPage(driver);
//             await registerPage.navigateToPassword('mngr573293');
//          });

//          When('the user enter the Password',async function () {
//             registerPage = new RegisterPage(driver);
//             await registerPage.navigateToPassword('Yvusevy');
//          });


//          When('the user clicks on login button', async function () {
//              registerPage = new RegisterPage(driver);
//              await registerPage.clickOnLoginButton();
//          });

//          Then('the user should see the Managementpage', async function () {    
//             registerPage = new RegisterPage(driver);
//             const pageTitle= await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/ul/li[1]/a"))).getText();
//             assert.strictEqual("Manager",pageTitle);
            
//          });


const { Builder, until,By } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');
 
// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);
let driver;
let registerPage;
 
When('A user enter user ID as {string}', async function (string) {
  driver = new Builder().forBrowser('firefox').build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    registerPage.navigateLogin('mngr572981');
});
 
 
 
When('the user enter password as {string}', function (string) {
 registerPage.enterPassword(string);
});
 
 
 
When('the user clicks on Login button', function () {
  registerPage.loginButton();
});
 
 
Then('the user should be redicted to Manager page', async function (){
  const pageTitle= await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/ul/li[1]/a")), 10000).getText();
  assert.strictEqual("Manager",pageTitle);
 
});