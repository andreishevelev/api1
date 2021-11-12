export default class ActionsBase {

    constructor(driver) {
        this.driver = driver;
    }

    async openPage(pageUrl){
        await this.driver.get(pageUrl);
    }
}