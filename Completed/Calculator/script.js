var displayDiv = document.querySelector("#display");
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
    num1  += num;
    displayDiv.innerText = num1;
}

function setOP(key){
    op = key;
    num2 = num1;
    num1 = "";
}

function clr(){
    num1 = "";
    num2 = "";
    op = "";
    displayDiv.innerText = "0";
}

function calculate(){
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;
    switch (op) {
        case "+":
            res = a+b;
            break;
        case "-":
            res = a-b;
            break;
        case "*":
            res = a*b;
            break;
        case "/":
            res = a/b;
            break;
    }
    num1 = res;
    op = "";
    displayDiv.innerText = res;
}