class Bike{
    
   
    constructor(gears)
    {
        this.gears=gears;
    }
}

class suzuki extends Bike{
constructor(brand,gears)
{
    super(gears);
    this.brand=brand;
}

}

const suzukibike=new suzuki("FZ",5);

console.log(suzukibike.brand+"-----"+suzukibike.gears);