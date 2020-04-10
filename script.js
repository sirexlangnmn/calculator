//* Video Tutorial link : https://www.youtube.com/watch?v=CI2GwL--ll8&list=PLhAYqyL8bdjy10dbfKoxnO4CXyGR9quCs&index=4
//* Tutorial title : how to build a simple calculator using javascript


function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        return document.getElementById("output-value").innerText = num;
    } else {
        return document.getElementById("output-value").innerText = formattedNumber(num);
    }
}

function formattedNumber(num) {
    if (num == "-") {
        return "";
    }

    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function originalNumber(num) {
    return Number(num.replace(/,/g,''));
}

let operators = document.getElementsByClassName("operator");
let ol = operators.length;
let i;
for (i = 0; i < ol; i++ ) {
    operators[i].addEventListener('click', operator);
}

function operator() {
    // alert("The operator: " + this.id);
    if (this.id == "clear") {  //* if output is a number
        printHistory("");
        printOutput("");
    }
    else if (this.id == "clear-entry") {
        let go = getOutput();
        let output = originalNumber(go).toString();
        if (output) { //* if output has a vallue
            output = output.substr(0, output.length - 1);
            printOutput(output);
        }
    }
    else {
        let output = getOutput();
        let history = getHistory();

        if (output == "" && history != "") {
            if (isNaN(history[history.length - 1])) {
                history = history.substr(0, history.length - 1);
            }
        }

        if (output != "" || history != "") {
            output = output == "" ? output : originalNumber(output);
            history = history + output;

            if (this.id == "=") {
                let result = eval(history);
                printOutput(result);
                printHistory("");
            }
            else {
                history = history + this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
}

let numbers = document.getElementsByClassName("number");
let nl = numbers.length;
let x;
for (x = 0; x < nl; x++ ) {
    numbers[x].addEventListener('click', number);
}

function number() {
    // alert("The number: " + this.id);
    let output = originalNumber(getOutput());

    if (output != NaN) {  //* if output is a number
        output = output + this.id;
        printOutput(output);
    }
}

