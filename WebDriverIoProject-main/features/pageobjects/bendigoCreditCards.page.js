import * as utils from '../../utils.js';

const bendigoBankCreditCardLocators = {
    screenTitle: '//h2[contains(@class, "exploreTile-title")]',
    creditCardType: function (cardType) {
        return `(//a[@aria-label="${cardType}"])[1]`
    },
    helpFulToolLink: '//h3[contains(text(), "Helpful")]',
    checkMyEligibilityTitle: '//h1[@class="title"]',
    continueApplyButton: "(//*[contains(text(), 'Continue to apply')])[1]",
    cardType: "//p[contains(text(), 'Card Type')]//following-sibling::span",
    gettingStartedProgressBar: "(//div[@step-title='Getting Started']//h2)[1]",
    preferredCreditLimit: "[name='maximumLimit']",
    buttonsInCreditCardpage: function (purposeOption) {
        return `//button[contains(text(), '${purposeOption}')]`
    },
    sectionTitle: "//h2[@class='sst-dp-padding sst-dp-collapsible-panel-title ng-binding']",
    relationshipStatus: '[name="maritalStatus"]',
    applicationDetailsQuestionOptions: function (question, option) {
        return `//label[contains(text(), '${question}')]//following-sibling::div//*[contains(text(), '${option}')]`
    },
    branchSearchField: "[name='branchSearch']",
    searchFindButton: '[name="branchSearchBtn"]',
    locationName: function (locationName) {
        return `//li[contains(text(), '${locationName}')]`
    },
    chosenLocation: "[ng-if='model.branchFormattedAddress']",
    employmentStatusDropDown: '[name="employmentStatus"]',
    occupationSearchInputField: 'input[name="occupationSearch"]',
    occupationDrodownValue: function (value) {
        return `//a[contains(@title, '${value}')]`
    },
    incomeAmountInputField: '[name="incomeAmount"]',
    incomeFrequencyDropDown: 'select[name="incomeFrequency"]',
    expenseAmountInputField: 'input[name="expenseAmount"]',
    paymentFrequencyDroDown: 'select[name="frequency"]',
    pleaseConfirmPopUpMsg: '//sst-dialog[@heading="Please confirm"]//div[@class="sst-dp-dialog-text ng-binding"]',
    buttonsInPopUp: function (button) {
        return `//sst-dialog[@heading="Please confirm"]//button[contains(text(), '${button}')]`
    },
    refNumber: "span[id='appNumber']",
    applicationMessage: 'div[ui-view="content"] h1',
    expenseSectionButton: '[name="expense"] div[class="crud-panel-padding-top-bottom"] button',
    expenseSectionMessage: '[name="expense"] div[class="crud-panel-padding-top-bottom"] label'

}
export async function getSelectedScreenTitle() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.screenTitle))
}

export async function clickApplyNowOnCreditCardType(cardType) {
    await browser.execute('arguments[0].scrollIntoView(); arguments[0].click();', await $(bendigoBankCreditCardLocators.creditCardType(cardType)));
}

export async function getcheckMyEligibilityTitle() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.checkMyEligibilityTitle))
}

export async function clickOnContinueApplyButton() {
   await browser.pause(3000)
   // const currentWindow = await utils.getMultipleWindows()
    //const currentWindow = await utils.getCurrentWindowId()

    await utils.clickOnElement($(bendigoBankCreditCardLocators.continueApplyButton))
    await browser.pause(3000)
    await browser.url('https://applynow.bendigobank.com.au/apply/?_gl=1*q53zck*_gcl_au*NTM5NTYyMTkwLjE2OTI0MDIxMTg.*_ga*MTYyMzE1MjMxOC4xNjkyNDAyMTE4*_ga_8G245KPFM1*MTY5MjQyMjI1OC4yLjEuMTY5MjQyMzkzNC40Ni4wLjA.#/apply/new/creditCards/loanDetails/productSelection?productCode=RCA-M1-BRT-BRT');
    //await utils.clickOnElement($(bendigoBankCreditCardLocators.continueApplyButton))
   // await utils.switchToNewWindowById(currentWindow)
    await utils.waitForPageLoad()
}

export async function IsBendigoCardTypeDisplayed() {
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.cardType))
    return await utils.isElementDisplayed($(bendigoBankCreditCardLocators.cardType))
}

export async function getBendigoCardType() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.cardType))
}

export async function isGettingProgessBarDisplayed() {
    return await utils.isElementDisplayed($(bendigoBankCreditCardLocators.gettingStartedProgressBar))
}

export async function getGettingProgessBarText() {
    return await utils.getElementText($(bendigoBankCreditCardLocators.gettingStartedProgressBar))
}

export async function enterAmountInPreferredLimitField(amount) {
    await utils.setInputField($(bendigoBankCreditCardLocators.preferredCreditLimit), amount)
}

export async function clickOnOption(purpose) {
    await utils.clickOnElement($(bendigoBankCreditCardLocators.buttonsInCreditCardpage(purpose)))
}

export async function getSectionTitle() {
    await utils.waitForPageLoad()
    await browser.pause(10000)
    await utils.waitForElementDisplayed($(bendigoBankCreditCardLocators.sectionTitle))
    return await utils.getElementText($(bendigoBankCreditCardLocators.sectionTitle))
}

export async function selectRelationShipDropDownValue(value) {
    await utils.selectDropdownByVisibleText($(bendigoBankCreditCardLocators.relationshipStatus), value)
}

export async function selectOptionForQuestion() {
   // await utils.clickOnElement($(bendigoBankCreditCardLocators.applicationDetailsQuestionOptions(question, option)))
     await browser.pause(2000)
     await browser.$("//*[@name=\"hasPromoCode\"][@ng-model=\"model.hasPromoCode\"][2]").click()
      await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").waitForClickable()
        //browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").waitUntil
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
       await browser.pause(20000)
      await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
       // await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
        await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").click()


        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").waitForClickable()

        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
        await browser.pause(2000)

}
