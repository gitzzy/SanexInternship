var details = {
    nameq: 'Devansh',
    age : 23,
    city: 'Sonipat'
}

//es5
// var nam = details.nameq
// var age = details.age
// var city = details.city

// console.log(nam,age,city)


//es6
const {nameq,age,city} = details
console.log(nameq,age,city)
const {nameq:n,age:a,city:c} = details
console.log(n,a,c)

//es5
var arr = ["A","B","C","D","E"]
// console.log(arr[0])

//es6
let [a1,a2,a3,a4,a5] = arr
console.log(a2)