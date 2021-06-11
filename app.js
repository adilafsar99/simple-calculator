//Global variables for operands, operator and result
var num1 = 0,
    num2 = "",
    operator = null,
    replaceValue = true,
    result;

//Initial values of screens
document.getElementById("input-screen").value = num1;
document.getElementById("result-screen").value = "";

//Function to enter numbers as input
function showNum(num) {
    if (replaceValue === true) {
        if (num === ".") {
            document.getElementById("input-screen").value = "0.";
        } else if (num !== ".") {
            document.getElementById("input-screen").value = num;
        }
        if (operator === null) {
            num1 = document.getElementById("input-screen").value;
            replaceValue = false;
        } else {
            num2 = document.getElementById("input-screen").value;
            replaceValue = false;
        }
    } else {
        if (num == "." && document.getElementById("input-screen").value.indexOf(".") === -1) {
            document.getElementById("input-screen").value += num;
        } else if (num !== ".") {
            document.getElementById("input-screen").value += num;
        }
        if (operator === null) {
            num1 = document.getElementById("input-screen").value;
        } else {
            num2 = document.getElementById("input-screen").value;
        }
    }
}

//Function to select an operator
function chooseOperator(operatorSign) {
    if (num2 === "") {
        operator = operatorSign;
        replaceValue = true;
    }
}

//Function to perform the requested operation
function calculate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "/") {
        if (num1 === 0 && num2 === 0) {
            document.getElementById("result-screen").value = "Undefined";
            document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        } else if (num2 === 0) {
            document.getElementById("result-screen").value = "Infinity";
            document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        } else {
            result = num1 / num2;
            document.getElementById("result-screen").value = result;
            document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
            replaceValue = true;
            num1 = 0;
            num2 = "";
            operator = null;
        }
    } else if (operator === "*") {
        result = num1 * num2;
        document.getElementById("result-screen").value = result;
        document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    } else if (operator === "+") {
        result = num1 + num2;
        document.getElementById("result-screen").value = result;
        document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    } else if (operator === "-") {
        result = num1 - num2;
        document.getElementById("result-screen").value = result;
        document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    } else if (operator === "^") {
        result = num1 ** num2;
        document.getElementById("result-screen").value = result;
        document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    } else if (operator === "%") {
        result = num1 % num2;
        document.getElementById("result-screen").value = result;
        document.getElementById("input-screen").value = num1 + " " + operator + " " + num2;
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    } else {
        document.getElementById("result-screen").value = "√ not working yet!";
        replaceValue = true;
        num1 = 0;
        num2 = "";
        operator = null;
    }
}

//Function to clear screen
function clearScreen() {
    document.getElementById("input-screen").value = 0;
    document.getElementById("result-screen").value = "";
    replaceValue = true;
    num1 = 0;
    num2 = "";
    operator = null;
}
