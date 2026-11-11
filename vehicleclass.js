class Vehicle
{
    startEngine()
    {
        console.log("start engine function invoked")
    }
    constructor(brand,colour)//non parameterised constructor
    {
        console.log("Constructor invoked")
        this.brand=brand
        this.colour=colour
    }
displayCarDetails()
{
console.log(this.brand)
console.log(this.colour)
}



}
const vehicle=new Vehicle("honda","black")//object creation
vehicle.startEngine()
vehicle.displayCarDetails()

const vehicleobj1=new Vehicle("yamaha","red")
vehicleobj1.startEngine()
vehicleobj1.displayCarDetails()