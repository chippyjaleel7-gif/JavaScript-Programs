const car=
{

    colour:"black",
    Brand:"honda",
    price:270000,
    isautomate:true,
    features:["seatheater","lcd tv"],
    engine:
    {
        type:"petrol",
        power:250
    },
   
details:function()

{
console.log(this.colour)
console.log(this.Brand)

}

}
console.log(car.colour)
console.log(car.features[1])
console.log(car.engine.power)
car.details()

import data from "./data.json" with {type:'json'}//import from json file
const datastring=JSON.stringify(data)
const datajs=JSON.parse(datastring)
console.log(datajs.brand)
