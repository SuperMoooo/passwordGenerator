document.addEventListener('DOMContentLoaded', () => {
    const sliderValue = document.querySelector('.slider p');
    const sliderInput = document.querySelector('.slider input');
    const boxes = document.querySelectorAll('.box > label');
    const box1 = document.querySelector('#checkedBox1');
    box1.classList.add('selected');

    let passwordLenght = 3;
    sliderInput.addEventListener('input', () => {
        sliderValue.innerHTML = sliderInput.value;
        passwordLenght = sliderInput.value;
    });
    let lettersBool = 1;
    let bigLettersBool = 0;
    let numbersBool = 0;
    let symbolsBool = 0;
    let actives = 1;

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            let valueCheck = box.dataset.value;

            if (!box.parentElement.classList.contains('selected')) {
                box.parentElement.classList.add('selected');
                actives += 1;
                if (valueCheck === '1') {
                    lettersBool = 1;
                }
                if (valueCheck === '2') {
                    bigLettersBool = 1;
                }
                if (valueCheck === '3') {
                    numbersBool = 1;
                }
                if (valueCheck === '4') {
                    symbolsBool = 1;
                }
            } else if (actives > 1) {
                box.parentElement.classList.remove('selected');
                actives -= 1;
                if (valueCheck === '1') {
                    lettersBool = 0;
                }
                if (valueCheck === '2') {
                    bigLettersBool = 0;
                }
                if (valueCheck === '3') {
                    numbersBool = 0;
                }
                if (valueCheck === '4') {
                    symbolsBool = 0;
                }
            }
        });

        box.parentElement.addEventListener('click', () => {
            let valueCheck = box.dataset.value;

            if (!box.parentElement.classList.contains('selected')) {
                box.parentElement.classList.add('selected');
                actives += 1;
                if (valueCheck === '1') {
                    lettersBool = 1;
                }
                if (valueCheck === '2') {
                    bigLettersBool = 1;
                }
                if (valueCheck === '3') {
                    numbersBool = 1;
                }
                if (valueCheck === '4') {
                    symbolsBool = 1;
                }
            } else if (actives > 1) {
                box.parentElement.classList.remove('selected');
                actives -= 1;
                if (valueCheck === '1') {
                    lettersBool = 0;
                }
                if (valueCheck === '2') {
                    bigLettersBool = 0;
                }
                if (valueCheck === '3') {
                    numbersBool = 0;
                }
                if (valueCheck === '4') {
                    symbolsBool = 0;
                }
            }
        });
    });

    const password = document.querySelector('.password');
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'y',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    symbols = [
        '!',
        '#',
        '$',
        '%',
        '€',
        '&',
        '/',
        '(',
        ')',
        '=',
        '?',
        '»',
        '«',
        '\\',
        '+',
        '*',
        '^',
        '~',
        '-',
        '_',
        '.',
        ':',
        ',',
        ';',
        '<',
        '>',
        'º',
        'ª',
        '`',
        '-',
    ];

    let valuesList = [];
    let randomValue;

    function generatePassword() {
        password.innerHTML = '';
        valuesList = [];
        for (let i = 0; i < passwordLenght; i++) {
            if (numbersBool) {
                let randomNumber = Math.floor(Math.random() * 10);
                valuesList.push(numbers[randomNumber]);
            }
            if (lettersBool) {
                let randomletter = Math.floor(Math.random() * 26);
                valuesList.push(letters[randomletter]);
            }

            if (bigLettersBool) {
                let randomletter = Math.floor(Math.random() * 26);
                valuesList.push(letters[randomletter].toUpperCase());
            }

            if (symbolsBool) {
                let randomSymbol = Math.floor(Math.random() * 30);
                valuesList.push(symbols[randomSymbol]);
            }
        }
        for (let i = 0; i < passwordLenght; i++) {
            let randomInList = Math.floor(Math.random() * valuesList.length);
            aux = valuesList[randomInList];
            password.innerHTML += aux;
        }
    }
    const generateBtn = document.querySelector('.container-btn > button');
    generateBtn.addEventListener('click', generatePassword);

    //end
});
