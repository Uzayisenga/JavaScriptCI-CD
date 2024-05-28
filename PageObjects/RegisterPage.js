// const { By, until } = require('selenium-webdriver');

// class RegisterPage {
//     constructor(driver) {
//         this.driver = driver;
//         this.visitLink = By.xpath('/html/body/div[3]/ol/li[1]/a');
//         this.emailInput = By.name("emailid");
//         this.submitButton = By.xpath("/html/body/form/table/tbody/tr[6]/td[2]/input");
//         this.advertClose = By.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div/span');
//         this.loginUserName= By.name('uid');
//         this.checkPassword = By.name('password');
//         this.buttonLogin =By.name('btnLogin');
//         this.loginField=By.xpath("/html/body/form/table/tbody/tr[1]/td[2]/input");
//         this.passwordField=By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/input");
//         this.loginBtn=By.xpath("/html/body/form/table/tbody/tr[3]/td[2]/input[1]");
//         this.paymentGateAwayBy = By.xpath('/html/body/div[1]/div[2]/nav/div/div/ul/li[9]/a');
//         this.generateCardNumberBy = By.xpath('/html/body/header/div/nav/a[2]');
//         this.addToCartBy =By.xpath('/html/body/header/div/nav/a[1]');
//         this.quantityBy = By.name('quantity');
//         this.buyBtnBy = By.xpath('/html/body/section/div/form/div/div[8]/ul/li/input');
//     }
//     async closePopups() {
//         try {
//             // Example: Close any pop-up with a specific class or ID
//             const popupCloseButton = await this.driver.findElement(By.cssSelector('.close-popup'));
//             if (popupCloseButton) {
//                 await popupCloseButton.click();
//             }
//         } catch (error) {
//             // Pop-up not found, continue with the test
//         }
//     }

//     async navigateToVisitLink() {
//         const visitLinkElement = await this.driver.findElement(this.visitLink);
//         await visitLinkElement.click();
//     }
//     async closeAlert(){
//         const advertCloseElement = await this.driver.findElement(this.advertClose);
//         await advertCloseElement.click();
//     }

//     async enterEmail(email) {
//         const emailInputElement = await this.driver.findElement(this.emailInput);
//         await emailInputElement.sendKeys(email);
//     }

//     async clickSubmitButton() {
//         const submitButtonElement = await this.driver.findElement(this.submitButton);
//         await submitButtonElement.click();
//     }

// async navigateLogin(id){
//     const loginButtonElement= await this.driver.findElement(this.loginField);
//     await loginButtonElement.sendKeys(id);
// }
// async enterPassword(password){
//     const passwordElement=await this.driver.findElement(this.passwordField);
//     await passwordElement.sendKeys(password);
// }
// async loginButton(){
//     const loginBtn1Element=await this.driver.findElement(this.loginBtn);
//     await loginBtn1Element.click();
// }
// async navigateToPayment(){
//     const paymentElement =await this.driver.findElement(this.paymentGateAwayBy);
//     await paymentElement.click();
// }
// async navigateTogenerateCardNumber(){
//     const generateCardNumberElement = await this.driver.findElement(this.generateCardNumberBy);
//     await generateCardNumberElement.click();
// }
// async navigateToCart(){
//     const goToCartElement = await this.driver.findElement(this.addToCartBy);
//     await goToCartElement.click();
// } 
// async addQuantity(){
//     const checkQuantity = await this.driver.findElement(this.quantityBy);
//     const selectDropdown = new Select(dropdownElement);
//     await selectDropdown.selectByVisibleText(option);
// }
// async clickOnBuyButton(){
//     const buyProductelement =await this.driver.findElement(this.buyBtnBy);
//     await buyProductelement.click();
// }

// }

// module.exports = RegisterPage;
// const { By, Select } = require('selenium-webdriver');

// class RegisterPage {
//     constructor(driver) {
//         this.driver = driver;
//         this.paymentGatewayLink = By.xpath('/html/body/div[1]/div[2]/nav/div/div/ul/li[9]/a');
//         this.generateCardNumberLink = By.xpath('/html/body/header/div/nav/a[2]');
//         this.cartLink = By.xpath('/html/body/header/div/nav/a[1]');
//         this.quantitySelect = By.name('quantity');
//         this.buyNowButton = By.xpath('/html/body/section/div/form/div/div[8]/ul/li/input');
//         this.cardNumberInput = By.name('card_nmuber');
//         this.expirationMonthSelect = By.id('month');
//         this.expirationYearSelect = By.id('year');
//         this.cvvInput = By.name('cvv_code');
//         this.payButton = By.name('submit');
//     }

//     async navigateToPayment() {
//         const paymentElement = await this.driver.findElement(this.paymentGatewayLink);
//         await paymentElement.click();
//     }

//     async navigateTogenerateCardNumber() {
//         const generateCardNumberElement = await this.driver.findElement(this.generateCardNumberLink);
//         await generateCardNumberElement.click();
//     }

//     async navigateToCart() {
//         const goToCartElement = await this.driver.findElement(this.cartLink);
//         await goToCartElement.click();
//     }

//     async addQuantity() {
//         const quantityElement = await this.driver.findElement(this.quantitySelect);
//         const selectDropdown = new Select(quantityElement);
//         await selectDropdown.selectByVisibleText('1'); // Change the text based on the desired quantity
//     }

//     async clickOnBuyButton() {
//         const buyButtonElement = await this.driver.findElement(this.buyNowButton);
//         await buyButtonElement.click();
//     }

//     async enterCardNumber(cardNumber) {
//         const cardNumberElement = await this.driver.findElement(this.cardNumberInput);
//         await cardNumberElement.sendKeys(cardNumber);
//     }

//     async selectExpirationMonth(month) {
//         const monthElement = await this.driver.findElement(this.expirationMonthSelect);
//         const selectDropdown = new Select(monthElement);
//         await selectDropdown.selectByVisibleText(month);
//     }

//     async selectExpirationYear(year) {
//         const yearElement = await this.driver.findElement(this.expirationYearSelect);
//         const selectDropdown = new Select(yearElement);
//         await selectDropdown.selectByVisibleText(year);
//     }

//     async enterCVV(cvv) {
//         const cvvElement = await this.driver.findElement(this.cvvInput);
//         await cvvElement.sendKeys(cvv);
//     }

//     async clickOnPayButton() {
//         const payButtonElement = await this.driver.findElement(this.payButton);
//         await payButtonElement.click();
//     }
// }

// module.exports = RegisterPage;

//-------------------------------------------------------------------------------------------------------------

const { By,until, Select } = require('selenium-webdriver');

class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.paymentGatewayLink = By.xpath('/html/body/div[1]/div[2]/nav/div/div/ul/li[9]/a');
        this.generateCardNumberLink = By.xpath('/html/body/header/div/nav/a[2]');
        this.cartLink = By.xpath('/html/body/header/div/nav/a[1]');
        this.quantitySelect = By.name('quantity');
        this.buyNowButton = By.xpath('/html/body/section/div/form/div/div[8]/ul/li/input');
        this.cardNumberInput = By.name('card_nmuber');
        this.expirationMonthSelect = By.id('month');
        this.expirationYearSelect = By.id('year');
        this.cvvInput = By.name('cvv_code');
        this.payButton = By.name('submit');

        this.seleniumLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/a');
        this.fileUploadLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/ul/li[10]/a');
        this.chooseFile = By.id('uploadfile_0');
        this.acceptTermsCheckbox = By.id('terms');
        this.submitButton = By.id('submitbutton');
    }

    async navigateToPayment() {
        const paymentElement = await this.driver.findElement(this.paymentGatewayLink);
        await paymentElement.click();
    }

    async navigateTogenerateCardNumber() {
        const generateCardNumberElement = await this.driver.findElement(this.generateCardNumberLink);
        await generateCardNumberElement.click();
    }

    async navigateToCart() {
        const goToCartElement = await this.driver.findElement(this.cartLink);
        await goToCartElement.click();
    }

    async addQuantity() {
        const quantityElement = await this.driver.findElement(this.quantitySelect);
        const selectDropdown = new Select(quantityElement);
        await selectDropdown.selectByVisibleText('1'); // Change the text based on the desired quantity
    }

    async clickOnBuyButton() {
        const buyButtonElement = await this.driver.findElement(this.buyNowButton);
        await buyButtonElement.click();
    }

    async enterCardNumber(cardNumber) {
        const cardNumberElement = await this.driver.findElement(this.cardNumberInput);
        await cardNumberElement.sendKeys(cardNumber);
    }

    async selectExpirationMonth(month) {
        const monthElement = await this.driver.findElement(this.expirationMonthSelect);
        const selectDropdown = new Select(monthElement);
        await selectDropdown.selectByVisibleText(month);
    }

    async selectExpirationYear(year) {
        const yearElement = await this.driver.findElement(this.expirationYearSelect);
        const selectDropdown = new Select(yearElement);
        await selectDropdown.selectByVisibleText(year);
    }

    async enterCVV(cvv) {
        const cvvElement = await this.driver.findElement(this.cvvInput);
        await cvvElement.sendKeys(cvv);
    }

    async clickOnPayButton() {
        const payButtonElement = await this.driver.findElement(this.payButton);
        await payButtonElement.click();
    }

    async selenium() {
        const seleniumDropdownElement = await this.driver.findElement(this.seleniumLink);
        await this.driver.wait(until.elementIsVisible(seleniumDropdownElement), 5000);
        await seleniumDropdownElement.click();
    }

    async fileUpload() {
        const fileElement = await this.driver.findElement(this.fileUploadLink);
        await this.driver.wait(until.elementIsVisible(fileElement), 5000);
        await fileElement.click();
    }

    async choosedocument(filePath) {
        const chooseElement = await this.driver.findElement(this.chooseFile);
        await this.driver.wait(until.elementIsVisible(chooseElement), 5000);
        await chooseElement.sendKeys(filePath);
    }

    async acceptTerms() {
        const checkboxElement = await this.driver.findElement(this.acceptTermsCheckbox);
        await this.driver.wait(until.elementIsVisible(checkboxElement), 5000);
        if (!await checkboxElement.isSelected()) {
            await checkboxElement.click();
        }
    }

    async submitFile() {
        const submitElement = await this.driver.findElement(this.submitButton);
        await this.driver.wait(until.elementIsVisible(submitElement), 5000);
        await submitElement.click();
    }
}

module.exports = RegisterPage;

