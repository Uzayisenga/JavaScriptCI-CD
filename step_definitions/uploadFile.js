
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

const { until, By, Builder } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');
const path = require('path');

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

//let driver; 
let registerPage;

When('a user clicks on selenium link', async function () {
    driver = new Builder().forBrowser('chrome').build();
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
    // This step can be handled within 'clicks on choose file' step as the file is already selected from local machine.
});

When('the user clicks on checkbox for I accept terms of service', async function () {
    await registerPage.acceptTerms();
});

When('clicks on submit button file', async function () {
    await registerPage.submitFile();
});

Then('the user should receive {string} message', async function (expectedMessage) {
    try {
        // Ensure the expected message is defined and is a string
        if (typeof expectedMessage !== 'string') {
            throw new Error('Expected message is not a string');
        }

        // Wait for the element to be located and visible
        const successMessageElement = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="res"]/center'))
        );
        await driver.wait(until.elementIsVisible(successMessageElement), 5000);

        // Get the text content of the element
        const successMessage = await successMessageElement.getText();

        // Debugging output to verify actual message
        console.log('Actual success message:', successMessage);

        // Ensure the success message is defined and is a string
        if (typeof successMessage !== 'string') {
            throw new Error('Success message is not a string');
        }

        // Compare the actual message with the expected message
        assert(successMessage.includes(expectedMessage), `Expected "${successMessage}" to include "${expectedMessage}"`);
    } catch (error) {
        console.error('Error finding success message:', error);

        // Print the current page source for debugging purposes
        const pageSource = await driver.getPageSource();
        console.log('Current page source:', pageSource);

        // Capture a screenshot for debugging purposes
        await driver.takeScreenshot().then((image, err) => {
            require('fs').writeFileSync('error_screenshot.png', image, 'base64');
            if (err) console.log(err);
        });
        throw error;
    } finally {
        // Quit the driver after the test is done
        await driver.quit();
    }
});


