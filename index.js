function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "Not today bucko!"
    } else {
    return num1 / num2;
    }
}


let left;
let operator;
let right;
let splitCalc;


function operate(left, operator, right) {
    let result;
    if (left === "" || right === "") {
        screen.innerText = "Click here to clear!"
    }
    switch (operator) {
        case "+":
            // result = left + right
            return add(left, right)
            break
        case "-":
            // result = left - right
            return subtract(left, right)
            break
        case "*":
            // result = left * right
            return multiply(left, right)
            break
        case "/":
            // result = left / right
            return divide(left, right)
            break
    }
}

let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (){
        if (screen.innerText.includes("Not today bucko!")) {
            screen.innerText = buttons[i].innerText;
        } else if (screen.innerText.includes(".") && buttons[i].innerText == ".") {
            screen.innerText = screen.innerText;
        } else if (buttons[i].classList.contains("screen")) {
            screen.innerText = "Click here to clear!"
        } else if ((buttons[i].innerText === "+" || buttons[i].innerText === "-" || buttons[i].innerText === "*" || buttons[i].innerText === "/") && (screen.innerText.includes("+") || screen.innerText.includes("-") || screen.innerText.includes("*") || screen.innerText.includes("/"))) {
            splitCalc = screen.innerText.split(/([+\-\*\/])/);
            console.log(splitCalc);
            screen.innerText = (operate(splitCalc[0], splitCalc[1], splitCalc[2])) + buttons[i].innerText;// .toFixed(4);
        } else if (buttons[i].innerText === "="){
            let currentNums = screen.innerText;
            splitCalc = screen.innerText.split(/([+\-\*\/])/);
            let result = operate(splitCalc[0], splitCalc[1], splitCalc[2]);
            console.log("The result is " + result)
            if (result === undefined) {
                screen.innerText = currentNums; // "Click here to clear!";
            } else if (result == "Not today bucko!") {
                screen.innerText = "Not today bucko!";
            } else {
                screen.innerHTML = operate(splitCalc[0], splitCalc[1], splitCalc[2]).toFixed(4);
                if (screen.innerText == parseInt(screen.innerText)) {
                    screen.innerText = parseInt(screen.innerText);
                }
            }
        } else if(screen.innerText === "Click here to clear!") {
            screen.innerText = buttons[i].innerText;
        // } else if ((screen.innerText.includes(/[+\-\*\/]/)) && (buttons[i].innerText == "=")){
        //     screen.innerText = screen.innerText;
        } else {
        screen.innerText += (buttons[i].innerText);
        }
    })
}