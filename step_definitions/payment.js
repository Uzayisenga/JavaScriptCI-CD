const { Builder, By, until, Select } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

let driver;
let registerPage;

When('A user click on paymentGateway section', async function () {
    driver = new Builder().forBrowser('firefox').build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/payment-gateway/index.php');
    await registerPage.navigateToPayment();
});

When('the user clicks on generate Card Number', async function () {
    await registerPage.navigateTogenerateCardNumber();
});

When('the user clicks on cart', async function () {
    await registerPage.navigateToCart();
});

When('the user select the numberOfItems', async function () {
    await registerPage.addQuantity();
});

When('the user clicks on BuyNow Button', async function () {
    await registerPage.clickOnBuyButton();
});

When('the user enters the card number as {string}', async function (cardNumber) {
    await registerPage.enterCardNumber(cardNumber);
});

When('the user select expiration month as"{float} "', async function (float) {
    await registerPage.selectExpirationMonth(float);
});

When('the user select expiration year as {string}', async function (year) {
    await registerPage.selectExpirationYear(year);
});

When('the user enter CVV codes as {string}', async function (cvv) {
    await registerPage.enterCVV(cvv);
});

When('the user clicks on PayButton', async function () {
    await registerPage.clickOnPayButton();
});
