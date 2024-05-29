const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const chromeDriverPath = '/usr/local/bin/chromedriver';

let service = new chrome.ServiceBuilder(chromeDriverPath).build();
chrome.setDefaultService(service);

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

module.exports = function () {

When('a user clicks on selenium link', async function () {
    driver = new Builder().forBrowser('firefox').build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await registerPage.selenium();
});

When('scroll down and clicks on File Upload link', async function () {
    await registerPage.fileUpload();
});

When('clicks on choose file', async function () {
    await driver.get('https://demo.guru99.com/test/upload/');
    const filePath = path.resolve('C:/Users/User/Desktop/Kwibuka-30.jpg'); 
    await registerPage.choosedocument(filePath);
});

When('select file from local machine', async function () {
});

When('the user clicks on checkbox for I accept terms of service', async function () {
    await registerPage.acceptTerms();
});

When('clicks on submit button file', async function () {
    await registerPage.submitFile();
});

Then('the user should receive {string} message', async function (expectedMessage) {
    try {
        if (typeof expectedMessage !== 'string') {
            throw new Error('Expected message is not a string');
        }

        const successMessageElement = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="res"]/center'))
        );
        await driver.wait(until.elementIsVisible(successMessageElement), 5000);

        const successMessage = await successMessageElement.getText();

        console.log('Actual success message:', successMessage);

        if (typeof successMessage !== 'string') {
            throw new Error('Success message is not a string');
        }

        assert(successMessage.includes(expectedMessage), `Expected "${successMessage}" to include "${expectedMessage}"`);
    } catch (error) {
        console.error('Error finding success message:', error);

        const pageSource = await driver.getPageSource();
        console.log('Current page source:', pageSource);
        await driver.takeScreenshot().then((image, err) => {
            require('fs').writeFileSync('error_screenshot.png', image, 'base64');
            if (err) console.log(err);
        });
        throw error;
    } finally {
        await driver.quit();
    }

});

};
