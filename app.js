function getOuputValue() {
    return document.getElementById("output-val").innerHTML;
}

function printOutputValue(num) {
    if (num == "")
        return document.getElementById("output-val").innerHTML = "";
    else
        return document.getElementById("output-val").innerHTML = num;
}

function getHistoryValue() {
    return document.getElementById("history-val").innerHTML;
}

function printHistoryValue(num) {
    if (num == "")
        return document.getElementById("history-val").innerHTML = "";
    else
        return document.getElementById("history-val").innerHTML = num;
}

function numberWithComma(num) {
    let a = Number(num);
    let value = a.toLocaleString("en");
    return value;
}

function removeComma(num) {
    return Number(num.replace(/,/g, ''));
}

// Declare Variables
let clearOutput = false;
let processOutput = false;
let useDecimal = false;

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        let val = removeComma(getOuputValue());
        if (clearOutput) {
            val = "";
            clearOutput = false;
            processOutput = true;
        }
        if (numberWithComma(val).length < 12) {
            val += this.id;
            printOutputValue(numberWithComma(val));
        }
    });
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < number.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printOutputValue("");
            printHistoryValue("");
        } else if (this.id == "backspace") {
            let value = removeComma(getOuputValue()).toString();
            value = value.substr(0, value.length - 1);
            printOutputValue(numberWithComma(value));
        } else {
            if (this.id !== "") {
                let outputVal = removeComma(getOuputValue());
                let hisval = getHistoryValue();
                if (this.id == "=") {
                    if (processOutput) {
                        let sum = hisval + outputVal;
                        let output = eval(sum);
                        printHistoryValue("");
                        printOutputValue(numberWithComma(output));
                        processOutput = false;
                    }
                } else if (getOuputValue() !== "") {
                    printHistoryValue(outputVal + " " + this.id);
                    clearOutput = true;
                }
            }
        }
    });
}