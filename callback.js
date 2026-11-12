function display(result)
{
    console.log("Result is: " + result)

}
function findAverage(mark1,mark2,mark3,myCallback)
{
    let average=(mark1+mark2+mark3)/3
    myCallback(average)
}
findAverage(85,90,78,display)


function display(result)
{
    console.log("Result is: " + result)
}
function findSum(num1,num2,myCallback)
{
    let sum=num1+num2
    myCallback(sum)
}
findSum(10,20,display)

