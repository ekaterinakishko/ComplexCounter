let counter = require('../pageobjects/Counter');
let defaultExpected = require('../data/expected.json').general;
describe('Single Counter', function () {
    let defaultCounter = new counter(1);
    browser.url('https://likejean.github.io/homework-5/');

    it('1.1 Verify that a header exists on top of the page and its named as Counters', function () {
        browser.url('https://likejean.github.io/homework-5/');
        expect(defaultCounter.textCounters).toEqual(defaultExpected.headerName);
    });

    it('1.2 Verify that the input field for counter title is present on the page with default value Counter Name', function () {
        expect(defaultCounter.inputEnterCounterName.getAttribute('value')).toEqual(defaultExpected.newCounterTitle);
    });

        it('1.3 Verify that the input field for Initial Count is present on the page with default value 50.', function () {
            expect(defaultCounter.inputEnterInitialCount.getAttribute('value')).toEqual(defaultExpected.newCounterInitialCount);
        });

        it('1.4 Verify that Counter Name input field has a title next to it: Enter Counter Title', function () {
            expect(defaultCounter.textEnterCounterTitle).toEqual(defaultExpected.enterCounterTitle);
        });

        it('1.5 Verify that Initial Count input field has a title next to it:  Enter Initial Count', function () {
            expect(defaultCounter.textEnterInitialCount).toEqual(defaultExpected.initialCountIF);
        });

        it('1.6 Verify that Total Result element is present under the Header and its initial value is 0 by default', function () {
            expect(defaultCounter.textTotalNumber).toEqual(defaultExpected.totalResult);
        });

        it('1.7 Verify that Count element is present in UI and its default value is equal to 0', function () {
            expect(defaultCounter.textCount).toEqual(defaultExpected.countValueInUI);
        });

        it('1.8 Verify the name of default counter, it must be equal to Default Counter', function () {
            expect(defaultCounter.textCounterName).toEqual(defaultExpected.nameDefaultCounter);
        });

        it( '1.9 Verify tha label next to Edit Counter Title field, it must be equal to Edit Counter Title', function () {
            expect(defaultCounter.textEditCounterTitle).toEqual(defaultExpected.labelEditCounterTitle);
        });

        it( '1.10 Verify that Counter Title can be changed via edit of the Edit Counter Title" field', function () {
            let newTitle = 'New counter title'; //new value of the title
            defaultCounter.inputEditCounterTitle.setValue(newTitle); //setting a new title value - 'New counter title'
            expect(defaultCounter.textCounterName).toEqual(defaultExpected.editCounterTitle);
        });

        it( '1.11 Verify that Default Limit Field1(LF1) has text "Change Step Options?"', function () {
            expect(defaultCounter.btnChangeStepOptionsLeft.getText()).toEqual(defaultExpected.defaultTextLimitField1);
        });


        it( '1.12 Verify that Default Limit Field1(LF2) has text "Change Step Options?"', function () {
            expect(defaultCounter.btnChangeStepOptionsRight.getText()).toEqual(defaultExpected.defaultTextLimitField2);
        });


        it( '1.13 Verify that value 1 in LF1 by default when clicks "Change Step Options?"', function () {
            defaultCounter.btnChangeStepOptionsLeft.click();
            expect(defaultCounter.inputFieldLeft.getValue()).toEqual(defaultExpected.defaultValueLimitField1);
        });

        it( '1.14 Verify that value "3" is present in LF2 by default when clicks "Change Step Options?" ', function () {
            defaultCounter.btnChangeStepOptionsRight.click();
            expect(defaultCounter.inputFieldRight.getValue()).toEqual(defaultExpected.defaultValueLimitField2);
        });

        it( '1.15 Verify that a click on red circle button with x returns the field to its initial state Change Step Options', function () {
            defaultCounter.btnXLeft.click();
            expect(defaultCounter.btnChangeStepOptionsLeft.getText()).toEqual(defaultExpected.clickOnRedLeftCircleButton);
        });

        it( '1.16 Verify that a click on red circle button with x returns the field to its initial state Change Step Options', function () {
            defaultCounter.btnXRight.click();
            expect(defaultCounter.btnChangeStepOptionsRight.getText()).toEqual(defaultExpected.clickOnRedRigthCircleButton);
        });


        it('1.17 Verify that when both limit fields take their default values,sub/add buttons get created', function () {
            let stepValues = defaultCounter.btnAddSubButtons.map(el => el.getAttribute('step'));
            expect(stepValues.join('/')).toEqual(defaultExpected.bothLimitFields);
        });

        it('1.18a Verify that when user clicks button with number 2, Total is equal to 2', function () {
            let totalValueBefore = defaultCounter.textTotalNumber; //remember the value before clicking on add button
            let buttonAdd = defaultCounter.btnAddSubButtons.find(el => el.getAttribute('step')==='2');
            buttonAdd.click();
            let totalValueAfter = defaultCounter.textTotalNumber; //take current value of Total
            expect(parseInt(totalValueAfter)).toEqual(parseInt(totalValueBefore)+2);
        });

        it('1.18b Verify that when user clicks button with number 2, the Count value becomes 2', function () {
            expect(defaultCounter.textCount).toEqual(defaultCounter.textTotalNumber);
        });

        it('1.19a Verify that when user clicks button with number -1, Total is equal to 1', function () {
            let totalValueBefore = defaultCounter.textTotalNumber; //remember the value before clicking on add button
            let buttonAdd = defaultCounter.btnAddSubButtons.find(el => el.getAttribute('step')==='-1');
            buttonAdd.click();
            let totalValueAfter = defaultCounter.textTotalNumber; //take current value of Total
            expect(parseInt(totalValueAfter)).toEqual(parseInt(totalValueBefore)-1);
        });

        it('1.19b Verify that when user clicks button with number -1, the Count value becomes 1', function () {
            expect(defaultCounter.textCount).toEqual(defaultCounter.textTotalNumber);
        });

        it('1.20 Enter 2 into LF1.  Enter 5 into LF2. Expected result: 4 add and 4 sub buttons get generated', function () {
            defaultCounter.btnChangeStepOptionsLeft.click();
            defaultCounter.inputFieldLeft.setValue('2');
            defaultCounter.btnChangeStepOptionsRight.click();
            defaultCounter.inputFieldRight.setValue('5');
            let stepValues = defaultCounter.btnAddSubButtons.map(el => el.getAttribute('step'));
            expect(stepValues.join('/')).toEqual(defaultExpected.enter2InLF1Enter5inLF2);
        });

        it('1.21 Verify that when RESET button is clicked the count value resets to 0', function () {
            defaultCounter.btnReset.click();
            expect(defaultCounter.textCount).toEqual('0');
        });

        it('1.22 Verify that ADD COUNTER button is present on the page', function () {
            expect(defaultCounter.btnAddCounter).toExist();
        });

        it('2.1 Verify that ERROR message appears if a user enters an integer which is >9 Limit Field 2 ', function () {
            defaultCounter.inputFieldRight.setValue('10');
            expect(defaultCounter.textErrorLess).toBeDisplayed();
        });

        it('2.2 Verify that ERROR message appears below and contains  if a user enters an integer which is <1 into Limit Field  1', function () {
            defaultCounter.inputFieldLeft.setValue('-1');
            expect(defaultCounter.textErrorGreater).toBeDisplayed();
        });

        it('2.3a Verify that no error message appears, if user enters integers 1 and 9 into limit fields', function () {
            defaultCounter.inputFieldLeft.setValue('1');
            defaultCounter.inputFieldRight.setValue('9');
            expect(defaultCounter.textErrorLess).not.toBeDisplayed();
        });

        it('2.3b Verify that no error message appears, if user enters integers 1 and 9 into limit fields', function () {
            expect(defaultCounter.textErrorGreater).not.toBeDisplayed();
        });

        it('4.1 Verify that the entire counter is deleted when DELETE button is clicked ', function () {
            defaultCounter.btnDelete.click();
            expect(defaultCounter.countContainer).not.toExist();
        });
});

describe('Multiple counters', function () {

    let firstCounter = new counter(1);
    let secondCounter = new counter(2);
    let thirdCounter = new counter(3);

    it('5.1 Validate that a new counter section appears below any existing one if clicked on Add Counter', function () {
        browser.url('https://likejean.github.io/homework-5/'); //lets reload the page
        const secondCounterName = 'This is a second counter';
        const secondCounterInitialCount = 150;
        firstCounter.inputEnterCounterName.setValue(secondCounterName); //setting a name for the second counter
        firstCounter.inputEnterInitialCount.setValue(secondCounterInitialCount); //setting initial count for the second counter
        firstCounter.btnAddCounter.click();
        console.log(secondCounter.textCount);
        expect(secondCounter.btnChangeStepOptionsLeft).toExist();
        expect(secondCounter.btnChangeStepOptionsRight).toExist();
        expect(secondCounter.btnAddSubButtons).toExist();
        expect(secondCounter.btnReset).toExist();
        expect(secondCounter.btnDelete).toExist();
        expect(firstCounter.textTotalNumber).toEqual('150');
        expect(secondCounter.textCount).toEqual('150');
    });

    it('6.1 How two counter interact  - looking at Total Value ', function () {
        firstCounter.btnReset.click();
        secondCounter.btnDelete.click();
        let buttonAdd = firstCounter.btnAddSubButtons.find(el => el.getAttribute('step')==='2');
        buttonAdd.click();
        const secondCounterName = 'This is a second counter';
        const secondCounterInitialCount = 150;
        firstCounter.inputEnterCounterName.setValue(secondCounterName); //setting a name for the second counter
        firstCounter.inputEnterInitialCount.setValue(secondCounterInitialCount); //setting initial count for the second counter
        firstCounter.btnAddCounter.click();
        let buttonSub = secondCounter.btnAddSubButtons.find(el => el.getAttribute('step')==='-3');
        buttonSub.click();
        expect(firstCounter.textTotalNumber).toEqual('149');
        expect(firstCounter.textCount).toEqual('2');
        expect(secondCounter.textCount).toEqual('147');
    });

    it('7.1 How two counter interact - how can we delete the second counter', function () {
        secondCounter.btnDelete.click();
        expect(firstCounter.textTotalNumber).toEqual('2');
        expect(secondCounter.btnChangeStepOptionsLeft).not.toExist();
    });

    it('8.1 Add 5 counters. Verify that in total you have 6 counters (5 + default)', function () {
        browser.url('https://likejean.github.io/homework-5/');
        for(let i = 1; i<=5; i++){
            firstCounter.btnAddCounter.click();
            browser.pause(2000);
        }
        expect(firstCounter.countContainer.length).toEqual(6);
    });

    it('9.1 In addition to default counter, add 2 more counters. Delete the last counter. Verify that only two counters are on the page', function () {
        browser.url('https://likejean.github.io/homework-5/');
        for(let i = 1; i<=2; i++){
            firstCounter.btnAddCounter.click();
            browser.pause(2000);
        }
        thirdCounter.btnDelete.click();
        expect(firstCounter.countContainer.length).toEqual(2);
    });

    it('10.1 In addition to default counter, add 2 more counters. Delete the first counter. Verify that only two counters are on the page', function () {
        browser.url('https://likejean.github.io/homework-5/');
        for(let i = 1; i<=2; i++){
            firstCounter.btnAddCounter.click();
            browser.pause(2000);
        }
        firstCounter.btnDelete.click();
        expect(firstCounter.countContainer.length).toEqual(2);
    });

    it('11.1 In addition to default counter, add 2 more counters. Delete the second counter. Verify that only two counters are on the page ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        for(let i = 1; i<=2; i++){
            firstCounter.btnAddCounter.click();
            browser.pause(2000);
        }
        secondCounter.btnDelete.click();
        expect(firstCounter.countContainer.length).toEqual(2);
    });

});
