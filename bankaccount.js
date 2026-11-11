class BankAccount
{

    #balance
    constructor(accntHolder,initialBalance)
    {
        this.accntHolder=accntHolder
        this.#balance=initialBalance
    }
    getBalance()
    {
        console.log(this.#balance)
    }
    deposit(amount)
    {
        this.#balance=this.#balance+amount
    }
    withdraw(amount)
    {
        this.#balance=this.#balance-amount
    }
    }

    const BankAccountobj=new BankAccount("jesbin",1000)
    BankAccountobj.accntHolder="Jesbin Jaleel"
console.log(BankAccountobj.accntHolder)
BankAccountobj.getBalance()
BankAccountobj.deposit(500)
BankAccountobj.getBalance()

BankAccountobj.withdraw(200)
BankAccountobj.getBalance()