import ChromeDriver from 'chromedriver'
import {Builder} from "selenium-webdriver";

let browser = 'chrome';

export let driver = await new Builder()
    .forBrowser(browser)
    //.usingServer("http://localhost:4444/wd/hub/")
    .build();

export let timeout = 25000;