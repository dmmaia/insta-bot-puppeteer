const puppeteer = require('puppeteer');

module.exports = async function login(page) {
    await page.goto('https://www.instagram.com', {timeout:120000});
    
    const USERNAME_SELECTOR = '#loginForm > div > div:nth-child(1) > div > label > input';
    const PASSWORD_SELECTOR = '#loginForm > div > div:nth-child(2) > div > label > input';
    const BUTTON_SELECTOR = '#loginForm > div > div:nth-child(3) > button';
    const BUTTON_SELECTOR_NOTNOW = '#react-root > section > main > div > div > div > div > button';
    const BUTTON_S_NOTNOW_NOTIFICATION = 'body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm';

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type('davidmmaia1@outlook.com');

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type('123456bot');

    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation({timeout:60000});
    await page.click(BUTTON_SELECTOR_NOTNOW);

    await page.waitForNavigation({timeout:60000});
    await page.click(BUTTON_S_NOTNOW_NOTIFICATION);
}