const letters=new Set(["a","b","c","d"]);

/*for(let x of letters)
{
    console.log(x);
}*/

const myLetters=letters.values();

let text=""
for(const entry of myLetters)
{
    text+=entry;
}

console.log(text);