class counter {
    constructor(i) {
        this.index = i;
    }
    get textCounters(){
        return $("//h1[@class='header']").getText();
    }
    get textEnterCounterTitle() {
        return $("//label[../input[@name='name']]").getText();
    }
    get textEnterInitialCount(){
        return $("//label[../input[@name='value']]").getText();
    }
    get textTotalNumber(){
        return $("//h3[@class = 'total-count']").getText().split('Total: ')[1];
    }
    get textCount(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//span[@class = 'badge primary badge-primary']`).getText();
    }
    get textCounterName(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//h3[../@class = 'row align-items-center justify-content-center']`).getText().split('. ')[1];
    }
    get textEditCounterTitle(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//label[../input[@name = 'edit']]`).getText();
    }
    get inputEditCounterTitle(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//input[@name = 'edit']`);
    }
    get inputFieldLeft(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//input[@name = 'lower']`);
    }
    get inputFieldRight(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//input[@name = 'upper']`);
    }
    get btnChangeStepOptionsLeft(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[@name = 'negative']`);
    }
    get btnChangeStepOptionsRight(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[@name = 'positive']`);
    }
    get btnXLeft(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[@name = 'negative']`);
    }
    get btnXRight(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[@name = 'positive']`);
    }
    get btnAddSubButtons(){
        return $$(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[@step]`);
    }
    get btnReset(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[text()[contains(.,'Reset')]]`);
    }
    get btnAddCounter(){
        return $("//button[text()[contains(.,'Add Counter')]]");
    }
    get textErrorLess(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//span[text()[contains(.,'Must be less than 10')]]`);
    }
    get textErrorGreater(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//span[text()[contains(.,'Must be greater than zero')]]`);
    }
    get countContainer(){
        return $$("//div[@class='container-fluid counter-wrapper']");
    }
    get btnDelete(){
        return $(`//div[@class='container-fluid counter-wrapper'][${this.index}]//button[text()[contains(.,'Delete')]]`);
    }

    get inputEnterCounterName(){
        return $("//input[@data-testid = 'counter-name-input']");
    }
    get inputEnterInitialCount(){
        return $("//input[@data-testid = 'counter-value-input']");
    }
}

module.exports = counter;


