const student=
{
name:"jesbin",
age:27,
city:"kochi"

}
console.log(student.name)
console.log(student["age"])

student.gender="female"//to add new key value
console.log(student)

student.age=30//update the key value
console.log(student)


delete student.city//to delete a key value
console.log(student.city)

for(let key in student)//for loop
{

    console.log(key+":" +student[key])

}

