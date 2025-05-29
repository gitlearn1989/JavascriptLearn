const points=[1,2,3,4,5,6];

let lownum=myArray(points);

console.log("The lowest number in a array is "+ lownum);

function myArray(arr)
{
return Math.min.apply(null,arr);
}


const revalarr=points.map(myFun);

console.log(revalarr);

function myFun(value,index,arr)
{
    return value*15;
}
const newarr=points.flatMap((x)=> x*2);

console.log(newarr);