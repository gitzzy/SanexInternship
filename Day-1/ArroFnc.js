function fnc1(caste){
    return 'Devansh '+caste;
}

let fnc = caste => {
    return 'Devansh '+caste;
}
console.log(fnc('Tyagi'))
console.log(fnc1('Tyagi'))

const sqrt = a => a*a;
console.log(sqrt(10))


//This keyword

function Test(){
    setInterval(() => {console.log(this)},1000)
    setInterval(function fn(){console.log(this)},1000)
}
Test()