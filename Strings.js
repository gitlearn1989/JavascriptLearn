let text='I am learning "java"';

let splittext=text.split(" ");

console.log(splittext[3]);

let text1 = "We are the so-called \\Vikings\" from the north north north.";
let splitnew=text1.split("\\");
console.log(splitnew);

console.log(text1.length)
console.log(text1.substring(4))
console.log(text1.replace(/north/g,"South"))

let textmatch = "The SPAIN in SPAIN stays SPAIN in the plain";


//console.log(textmatch.match("ain"));
//console.log(textmatch.match(/ain/gi));
const iterator=textmatch.matchAll("SPAIN");
console.log(Array.from(iterator));