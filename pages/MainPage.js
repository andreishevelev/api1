import {By, until} from "selenium-webdriver";
import ActionsBase from "./ActionsBase.js";
import {timeout} from "../tests/testBase.js";

export default class MainPage extends ActionsBase {

    driver;
    pageTitle = 'The Fastest Way to Compare Car Insurance Quotes | The Zebra';
    pageUrl = 'https://www.thezebra.com/';
    carInsuranceClickLocators = By.xpath('//*[text()=\'Insurance\']');
    zipCodeWrapperLocator = By.xpath('//*[@class=\'input-wrapper\']')

    constructor(driver) {
        super();
        this.driver = driver;
    }

    async open(){
        await this.openPage(this.pageUrl);
    }

    async carInsuranceClick() {
        let locators = await this.driver.findElements(this.carInsuranceClickLocators);
        locators[0].click();
    }

    async waitPageTitle() {
        await this.driver.wait(until.titleIs(this.pageTitle),timeout);
    }

    async zipWrapperRect() {
        let size = await this.driver.findElement(this.zipCodeWrapperLocator).getRect();
        console.log(size);
    }

}