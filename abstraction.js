class CoffeeMachine
{
    #boilwater()
    {
        console.log("boil water")
    }
    #addmilk()
        {
            console.log("add milk")
        }
        #addsugar()
        {
            console.log("add sugar")
        }
        #addcofeepowder()
        {
            console.log("add cofeepowder")
        }
        makecoffee()
        {
            this.#boilwater()
            this.#addmilk()
            this.#addsugar()
            this.#addcofeepowder()
            console.log("coffee ready")
        }
}
        
    
    const coffeeobj=new CoffeeMachine()
    coffeeobj.makecoffee()