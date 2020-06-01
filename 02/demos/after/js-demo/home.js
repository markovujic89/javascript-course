let text = "\"Marko\"";
let message = `Hello ${text}`;
let number = 345;
let x = "345.67";
let amount = Number.parseFloat(x);
message = message + "!!"+number.toString()+" "+amount;

let person = {
    firstName: "Marko",
    lastName: "Vujic"
};

console.log(person);

if(+(1.1+1.3).toFixed(2)===2.4) {
    console.log("2.4")
}

showMessage(message);