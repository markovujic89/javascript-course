let text = "\"Marko\"";
let message = `Hello ${text}`;
let number = 345;
let x = "345.67";
let amount = Number.parseFloat(x);
message = message + "!!"+number.toString()+" "+amount;
showMessage(message);