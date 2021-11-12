import ChromeDriver from 'chromedriver'
import {Builder, until} from "selenium-webdriver";
import MainPage from "../pages/MainPage.js";
import {driver} from "./testBase.js";

let mainPage = new MainPage(driver);

describe ('Test',  () => {

    it('should test', async () => {

        try {
            await mainPage.open();
            await mainPage.carInsuranceClick();
            await mainPage.waitPageTitle();
            await mainPage.zipWrapperRect();
        }

        finally{
            //
        }

        })

})
