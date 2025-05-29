const Car={
name:"BMW",
Enginecc:2500,
Colour:["blue","Red","Yellow"],
fullconfig: function fullcon()
{
    return "The Full configuration car is "+this.Colour[0]+","+this.Enginecc+","+this.name
}
}

console.log(Car.fullconfig())