
let firstName;
let lastName;
let age;
let eyecolor
function Person(first,last,age,eyecolor){
this.firstName=first;
this.lastName=last;
this.age=age;
this.eyecolor=eyecolor;
}

const father=new Person("Ram","Loganathan",30,"green");
const mother=new Person("Uma","Ramkumar",30,"green");
const son=new Person("Thamizh","Ramkumar",30,"green");
const daughter=new Person("Sanjana","Ramkumar",30,"green");

console.log(father.firstName)
