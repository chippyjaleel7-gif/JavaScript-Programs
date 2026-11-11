let fruits=["apple","orange","grapes"]
console.log(fruits[1])
console.log(fruits.length)//find array length
fruits.push("kiwi")//to add an element
console.log(fruits)
fruits.pop()//remove an element the end
console.log()
fruits.shift() //to remove an element from begining
fruits.unshift("banana")
console.log(fruits)
console.log(fruits.includes("apple"))//to check is it available in array true/false
console.log(fruits.indexOf("orange"))//to check the index number
fruits.push("mango","pineapple")
console.log(fruits)
const slicedArray=fruits.slice(1,3)
console.log(slicedArray)