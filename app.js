//Initial values of the screens
document.getElementById("input-screen").value = "0";
document.getElementById("result-screen").value = "";

//Function to recieve user input
function takeInput(input) {
    var inputScreen = document.getElementById("input-screen").value;
    if (input === "." && inputScreen.indexOf(".") === -1) {
        inputScreen += input;
    } else if (input !== ".") {
        if (inputScreen === "0") {
            inputScreen = input;
        } else {
            inputScreen += input;
        }
    }
    document.getElementById("input-screen").value = inputScreen;
}

//Function to recieve operator
function takeOperator(operator) {
    var inputScreen = document.getElementById("input-screen").value;
    var multiOperator = false;
    switch (inputScreen[inputScreen.length - 2]) {
        case "÷":
        case "x":
        case "+":
        case "-":
        case "%":
            multiOperator = true;
    }
    if (multiOperator) {
        inputScreen = inputScreen.slice(0, inputScreen.length - 2) + operator + " ";
    } else {
        inputScreen += " " + operator + " ";
    }
    document.getElementById("input-screen").value = inputScreen;
}

//Function to clear screens
function clearScreens() {
    document.getElementById("input-screen").value = "0";
    document.getElementById("result-screen").value = "";
}

//Function to delete input
function deleteInput() {
    var inputScreen = document.getElementById("input-screen").value;
    if (inputScreen.length > 1) {
        var operatorAtEnd = false;
        switch (inputScreen[inputScreen.length - 2]) {
            case "%":
            case "÷":
            case "x":
            case "+":
            case "-":
                operatorAtEnd = true;
        }
        if (operatorAtEnd) {
            inputScreen = inputScreen.slice(0, inputScreen.length - 3);
        } else {
            inputScreen = inputScreen.slice(0, inputScreen.length - 1);
        }
    } else {
        inputScreen = "0";
    }
    document.getElementById("input-screen").value = inputScreen;
}

//Function to calculate the expression
function calculate() {
    var inputScreen = document.getElementById("input-screen").value;
    var operatorAtEnd = false;
    switch (inputScreen[inputScreen.length - 2]) {
        case "%":
        case "÷":
        case "x":
        case "+":
        case "-":
            operatorAtEnd = true;
    }
    if (!operatorAtEnd) {
        inputScreen = inputScreen.replace(/x/g, "*");
        inputScreen = inputScreen.replace(/÷/g, "/");
        result = eval(inputScreen);
        document.getElementById("result-screen").value = result;
    }
}
