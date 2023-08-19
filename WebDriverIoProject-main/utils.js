/**
 * @Desc Gets the page title
 * @param None
 * @returns {string}
 */
export async function getPageTitle() {
  return await browser.getTitle()
}

/**
* @Desc wait for element to be clickable and clicks on the element
* @param {*} element - String or Webdriver IO Element
* @param {*} value - value that is provided to the text box
* @param {*} timeout - Default time out - browser.config.waitforTimeout
*/
export async function clickOnElement(element, timeout) {
  try {
    await element.waitForDisplayed({
      timeout: timeout ? timeout : browser.config.waitforTimeout
    })
  } catch (err) { }
  expect(await element.isDisplayed()).toEqual(true)
  await element.waitForClickable();
  await element.click();

}


/**
 * @Desc Gets the text of the elements
 * @param elements
 * @returns {*}
 */
export async function getTextOfElements(elements) {
  return await elements.map(ele => ele.getText())
}

/**
 * @Desc Gets the element text
 * @param element
 * @returns {Promise<string> | string}
 */

export async function getElementText(element) {
  return await element.getText()
}

/**
 * @Desc Elements is displayed
 * @param element
 * @returns {Promise<boolean>|boolean}
 */
export function isElementDisplayed(element) {
  try {
    return element.isDisplayed();
  } catch (e) {
    return false;
  }
}

/**
 * @Desc Waits for the element to the load
 * @param element
 * @return None
 */
export async function waitForElementToLoad(element, timeout = browser.options.waitforTimeout) {
  await browser.waitUntil(() => element.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: `The following element is not displaying: ${String(element)}`,
    interval: 500
  });
}

/**
 * waits untils page is loaded
 */
export async function waitForPageLoad() {
  await browser.waitUntil(
    async () =>
      await browser.execute(() => document.readyState === 'complete')
  ),
  {
    timeout: 60 * 1000, // 60 seconds
    timeoutMsg: 'Page Failed to load'
  }
}

/**
 * @Desc scrolls  into the element
 * @param element
 * @return None
 * 
 */
export async function scrollIntoElementView(element) {
  await element.scrollIntoView()
}

// Utility method to maximize the window
export async function maximizeWindow() {
  await browser.maximizeWindow();
};

/**
 * @Desc click on the element using javascript executor
 * @param locator
 * @return None
 */
export async function executeScript(locator) {
  await browser.execute(element => document.querySelector(element).click(), locator);
}

/**
 * @Desc Gets the window handle
 * @param None
 * @returns {string}
 */
export async function getCurrentWindowId() {
  return browser.getWindowHandle();
}

/**
* @Desc Gets the multiple window handles
* @param None
* @returns {string[]}
*/
export async function getMultipleWindows() {
  return await browser.getWindowHandles();
}

/**
 * @Desc Switch to newWindow by ID, takes first new window id to switch
 * @param windowIds
 * @return None
 */
export async function switchToNewWindowById(windowIds) {
  const currentWindows = await browser.getWindowHandles();
  const newWindows = currentWindows.filter(x => !windowIds.includes(x));

  //Currently not clear what we can do about new browser tab/window failing to open.
  //If this pattern continues, we will add retries to such tests
  if (newWindows.length < 1) {
    throw new Error('New browser tab failed to open or detect');
  }
  await browser.switchToWindow(newWindows[0]);
}

/**
 * @Desc Inputs the value to the elements
 * @param element
 * @param value
 * @return None
 */
export async function setInputField(element, value) {
  await element.waitForClickable();
  await element.setValue(value);
}

/**
* @Desc select the dropdown value by visible text
* @param element
* @param text
* @return None
*/
export async function selectDropdownByVisibleText(element, text) {
  await element.selectByVisibleText(text);
}

/**
 * @Desc Waits for the element to the displayed
 * @param element
 */
export async function waitForElementDisplayed(element) {
  await element.waitForDisplayed()
}