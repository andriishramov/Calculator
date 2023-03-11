let signsArray = Array.from(document.querySelectorAll('.operations')).map(selector => selector.innerHTML);
let numbers = Array.from(document.querySelectorAll('.numbers')).map(selector => selector.innerHTML);
let resetBtn = document.querySelector('.reset');

let output1 = document.querySelector("#show-calculation");
let output2 = document.querySelector("#output-result");

let num1 = '' ;
let num2 = '';
let sign = '';
let finish = false;

resetBtn.addEventListener('click', function (){
    num1 = '';
    num2 = '';
    sign = ''
    finish = false;
    output1.textContent = '';
    output2.textContent = '0';
})
document.querySelector('#buttons-container').addEventListener('click', function (e){
    if (!e.target.classList.contains('buttons')) return;
    if (e.target.classList.contains('reset')) return;
    output1.textContent = '';
    const key = e.target.textContent;
    if (numbers.includes(key)) {
        if (num2 === '' && sign === '') {
            num1 += key
            output1.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && finish){
            num2 = key;
            finish = false
            output1.textContent = num2
        }
        else {
            num2 += key;
            output1.textContent = num2
        }
        return
    }
    if (signsArray.includes(key)){
        sign = key;
        output1.textContent = num1 + sign
        return;
    }
    if (key === '='){
        if (num2 === ''){
            num2 = num1;
        }
        switch (sign) {
            case '+':
                num1 = (+num1) + (+num2);
                break;
            case '-':
                num1 = (num1) - (num2);
                break;
            case 'x':
                num1 = (num1) * (num2);
                break;
            case '/':
                if (num2 === '0'){
                    output2.textContent = 'error';
                    num1 = '';
                    num2 = '';
                    sign = '';
                    return;
                }
                num1 = (num1) / (num2);
                break;
        }
        finish = true
        output2.textContent = num1
    }
})





