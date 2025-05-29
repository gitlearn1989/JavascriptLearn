
let numbers=[20,10,50,4,1,98,49];

numbers.sort(function(a,b){ return a-b;});

console.log(numbers);
numbers.sort(function(a,b){ return b-a;});

console.log(numbers);

numbers.sort(function(){return 0.5 -Math.random()});

console.log(numbers);
