function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if(b == 0) return false;
    return a / b
}

function operate(numa, op, numb){
    let a = Number(numa), b = Number(numb);
    switch (op) {
        case 'add':
            return add(a, b)
        case 'substract':
            return subtract(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'divide':
            return divide(a, b)
    
        default:
            break;
    }
}

let numa = 0, numb = 0, op = '', isOperation = false;

const panel = document.querySelector('#number');
const buttons = document.querySelectorAll('button[value]:not([value=""])');
buttons.forEach((node) => {
    node.addEventListener('click', (e) => {
        if(isOperation){
            isOperation = false;
            panel.value = '';
        }
        panel.value += e.target.value;
    })
})

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if(!isOperation){
            result();
        }
        numa = panel.value;
        isOperation = true;
        op = e.target.id;
        console.log(op);
    })
})

const resultbtn = document.querySelector('.result');

resultbtn.addEventListener('click', result);

function result () {
    if(op != '' && !isOperation){
        isOperation = true;
        numb = panel.value;
        let numRes = operate(numa, op, numb);
        if(numRes == false){
            panel.value = 'Oops!';
            return;
        }
        if(numRes % 1 != 0){
            numRes = numRes.toFixed(8);
        }
        panel.value = numRes;
    }
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    numa = 0;
    numb = 0;
    op = '';
    isOperation = false;
    panel.value = '';
})

const deleteNum = document.querySelector('.delete-num');

deleteNum.addEventListener('click', () => {
    if(panel.value.length > 0){
        panel.value = panel.value.substr(0, panel.value.length - 1);
    }
})
//console.log(buttons);
