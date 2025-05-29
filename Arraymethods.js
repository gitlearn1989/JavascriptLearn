const fruits = ["Banana", "Orange", "Apple", "Mango"];
const veggies=["Carrot","Beans","cucumber","Brinjal","Mango"];

const frveg=fruits.concat(veggies)

console.log(frveg)

//frveg.pop();
frveg.shift();
console.log(frveg);

//console.log(frveg.includes("Brinjal"));
console.log(frveg.indexOf("Mango"));
console.log(frveg.lastIndexOf("Mango"));

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first)

function myFunction(value, index, array) {
  return value > 2;
}