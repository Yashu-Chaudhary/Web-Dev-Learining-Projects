console.log("Scripte Added");

// simple function
function greeting() {
    document.writeln("Greeting Function<br>");
}


// function expression
let a = function () {
    document.writeln("A Function<br>");
}


// arrow function
let msg = () => "Arrow Function<br>";


// iife
// (function () {
//     document.write("iife Function")
// }());



// Calculator

let x = () => {
    let b = parseFloat(document.getElementById("numOne").value);
    let c = parseFloat(document.getElementById("numTwo").value);
    let exp = document.getElementById("operator").value;
    let a = document.getElementById("ans")


    switch (exp) {
        case "add":
            a.textContent = b+c
            break;
        case "subtract":
            a.textContent = b-c
            break;
        case "multiplication":
            a.textContent = b*c
            break;
        case "divide":
            a.textContent = b/c
            break;
        default:
            return "Error: Enter the valid input";
    }
}