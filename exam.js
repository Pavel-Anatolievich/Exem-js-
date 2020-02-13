const numberInput = document.querySelector('#number-input');
const numberEntered = document.querySelector('#number-enter');
const minimumElement = document.querySelector('#minimum-index');
const sumElement = document.querySelector('#sum');
numberInput.addEventListener('input', (event) => {
    const value = event.target.value;
    const arr = value.replace(/ /g, '').split(',');
    numberEntered.textContent = arr.toString();
    const numberArray = arr.map(elem => parseInt(elem));
    const result = exem(numberArray);
    minimumElement.textContent = result.minIndex;
    sumElement.textContent = result.sum;
});

function exem(arr) {
    let min = arr[0];
    let minIndex = 0;
    let sum = 0;
    let minStart = false;
    let minFinish = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (minStart && arr[i] < 0) {
            minFinish = true;
        }
        if (minStart && !minFinish) {
            sum += arr[i];
        }
        if (!minStart && arr[i] < 0) {
            minStart = true;
        }
    }
    return { sum, minIndex };
}

const stringInputElement = document.querySelector('#string-input');
const stringReplaceElement = document.querySelector('#string-replace');
const stringResultElement = document.querySelector('#string-result');

let stringInput = '';
let stringReplace = '';

stringInputElement.addEventListener('input', event => {
    stringInput = event.target.value;
    if (stringInput && stringReplace) {
        let result = task2(stringInput, stringReplace);
        stringResultElement.textContent = result;
    }
});
stringReplaceElement.addEventListener('input', event => {
    stringReplace = event.target.value;
    if (stringInput && stringReplace) {
        let result = task2(stringInput, stringReplace);
        stringResultElement.textContent = result;
    }
});

function task2(str, match) {
    var reg = new RegExp(match, 'g');
    var finale = str.replace(reg, '--');
    return finale;
}
