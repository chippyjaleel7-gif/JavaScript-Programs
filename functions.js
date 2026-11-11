function printHello()
    {
console.log("hello world")


    }
printHello()



function addition(a,b)
{


    let result=a+b
    console.log(result)
}
addition(10,5)
addition(27,56)



function substraction(x,y)
{


    let sub=x-y
    return sub

}
const output=substraction(10,5)
console.log(output)



//anonymous functions

const greet=function()
{
console.log("good morning")
}
greet()



//arrow fuctions

const display=()=>{console.log("my name is jesbin")}
display()

const add=(l,m,n)=>l+m+n
const sum=add(1,2,3)
console.log(sum)