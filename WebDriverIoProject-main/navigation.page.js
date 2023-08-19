
import * as utils from './utils.js';

const navigationLocators = {
    // locators declare here
    bankingOption: function (option) {
        return `[name="${option}"]`
    },
    bankingMenuOptions: '//button[@name="banking"]//following-sibling::div//a',
    bankingMenuOption: function (option) {
        return `//button[@name="banking"]//following-sibling::div//a[contains(text(), '${option}')]`
    }
}

export async function navigateToBengigoBank() {
    await browser.url('https://www.bendigobank.com.au/');
    await utils.waitForPageLoad()
    await utils.maximizeWindow()

}

export async function clickOnbankingOption(option) {
    await utils.clickOnElement($(navigationLocators.bankingOption(option)), 9000)
}

export async function getBankingMenuOptions() {
    return await utils.getTextOfElements($$(navigationLocators.bankingMenuOptions))
}

export async function clickOnBankingMenuOption(menuOption) {
    await utils.clickOnElement($(navigationLocators.bankingMenuOption(menuOption)), 9000)
}

