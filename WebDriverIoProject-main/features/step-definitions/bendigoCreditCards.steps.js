import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import *  as navigationPage from '../../navigation.page.js';
import * as bendigoCreditCardsPage from '../pageobjects/bendigoCreditCards.page.js'
import * as utils from '../../utils.js';

let beforeAllExecuted = false;

// Before hook
Before(async function () {
   // Execute actions before each scenario
   // TODO Not doing anything in future we can add the code here
});

// After hook
After(async function () {
   // Execute actions after each scenario
   // TODO Not doing anything in future we can add the code here
});

Given("User navigates to the Bendigo Bank website", async () => {
   await navigationPage.navigateToBengigoBank()
   let expectedPageTitle = 'Bendigo Bank - credit cards, bank accounts, home loans and more'
   await expect(browser).toHaveTitleContaining(expectedPageTitle)
});

When('User clicks on {string} option at header', async function (option) {
   // Implementation to click on the specified link
   await navigationPage.clickOnbankingOption(option)

})

Then('User should able to see the following links', async function (dataTable) {
   const expectedLinks = dataTable.raw().flat();
   const actualLinks = await navigationPage.getBankingMenuOptions();
   console.log(actualLinks)
   for (const expectedLink of expectedLinks) {
      // Assert that an banking menu options contains a specific expected menu option
      await expect(actualLinks).toContain(expectedLink);
   }
})


When("User selects {string} from Banking menu options,verifies page title and screen displayes as {string}", async function (menuOption, screenName) {
   await navigationPage.clickOnBankingMenuOption(menuOption)
   await expect(browser).toHaveTitleContaining("Credit")
   const actualScreenTitle = await bendigoCreditCardsPage.getSelectedScreenTitle()
   // Assert that a value is equal to an expected value
   await expect(actualScreenTitle.trim()).toEqual(screenName);
});

When("User scrolls down and selects {string}", async function (creditCardType) {
   await bendigoCreditCardsPage.clickApplyNowOnCreditCardType(creditCardType)
})

Then("User validates {string} screen", async function (title) {
   const actualTitle = await bendigoCreditCardsPage.getcheckMyEligibilityTitle()
   await expect(actualTitle.trim()).toEqual(title);
})

Then('User clicks on {string}, validates correct screen and validates {string} section are displayed', async function (button, title) {
   //const currentWindow = await utils.getCurrentWindowId()
   await bendigoCreditCardsPage.clickOnContinueApplyButton()
   await expect(await bendigoCreditCardsPage.IsBendigoCardTypeDisplayed()).toBeTruthy();
   const actualBendigoCardType = await bendigoCreditCardsPage.getBendigoCardType()
   await expect(actualBendigoCardType).toEqual('Bendigo Bright Credit Card');
   await expect(await bendigoCreditCardsPage.isGettingProgessBarDisplayed()).toBeTruthy();
   const actualGettingStartedbar = await bendigoCreditCardsPage.getGettingProgessBarText()
   await expect(actualGettingStartedbar).toEqual(title);
})

When('User enters preferred Credit Limit as {string} and selects purpose as {string} in credit card details page', async function (amountLimit, purposeType) {
   await bendigoCreditCardsPage.enterAmountInPreferredLimitField(amountLimit)
   await bendigoCreditCardsPage.clickOnOption(purposeType)
})

When('User clicks on {string} button and verifies {string} section in credit card details', async function (button, sectionTitle) {
   await bendigoCreditCardsPage.clickOnOption(button)
   const actualSectionTitle = await bendigoCreditCardsPage.getSectionTitle()
   await expect(actualSectionTitle).toEqual(sectionTitle);
})

When('User selects {string} option from the relationship status drop down', async function (relationShipValue) {
   await bendigoCreditCardsPage.selectRelationShipDropDownValue(relationShipValue)
})

When('User selects {string} for {string} in credit card details page', async function (option, question) {
   await bendigoCreditCardsPage.selectOptionForQuestion()
})