const results = document.getElementById("result");
const inputValue = document.getElementById("input")
const numberBtn = document.getElementsByClassName("numberBtn")
const operationBtn = document.getElementsByClassName("operationBtn")
const allClearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const equalSignBtn = document.querySelector(".equalSignBtn");


const appendNumber = (number) => {
    inputValue.value += number;
}

const appendOperator = (operator) => {
    inputValue.value += operator;
}


const clearDisplay = () => {
    inputValue.value = "";
    results.value = "";
}

const deleteValue = (number) => {
    inputValue.value = number.toString().slice(0, -1);
}

const evaluateInputExpression = () => {
    const expression = inputValue.value;
    let output;

    const operands = expression.split(/[+\-x÷]/).map(parseFloat);
    const operator = expression.match(/[+\-x÷]/);

    switch (operator ? operator[0] : null) {
        case "+":
            output = operands.reduce((a, b) => a + b);
            break;
        case "-":
            output = operands[0] - operands[1];
            break;
        case "x":
            output = operands.reduce((a, b) => a * b);
            break;
        case "÷":
            output = operands[0] / operands[1];
            break;
        default:
            output = "";
    }

    results.value = output;
}

//const evaluateExpression = () => {
 //   try {
   //     results.value = eval(inputValue.value);
    //} catch (error) {
     //   results.value = "Error";
    //}
//}


Array.from(numberBtn).forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
})

Array.from(operationBtn).forEach((button) => {
    button.addEventListener("click", () => appendOperator(button.textContent));
})

allClearBtn.addEventListener("click", () => clearDisplay())

deleteBtn.addEventListener("click", () => deleteValue(inputValue.value))

equalSignBtn.addEventListener("click", evaluateInputExpression);