const puppeteer = require('puppeteer');
const login = require('./login');

async function run() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    login(page);

}

run();