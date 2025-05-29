class Car{
    #name;
    #price;
    #colour;

    constructor(name,price,colour)
    {
        this.#name=name;
        this.#price=price;
        this.#colour=colour;
    }

    getname()
    {
        return this.#name;
    }

    
    getcolour()
    {
        return this.#colour;
    }
    

    getprice()
    {
        return this.#price;
    }

    
}

const maruthi=new Car("BMW",25000,"White");



console.log(maruthi.getname()+"---"+maruthi.getcolour()+"----"+maruthi.getprice())