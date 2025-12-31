// Create an IIFE that prints "Started"
// (function(){
//     console.log('Started')
// })()

// Write a callback function for setTimeout
// setTimeout((function(){
//     console.log('Hi')
// }),5000)

// Convert the function to an arrow function
// const Greet=()=>{
//     console.log('Hello')
// }

// // Greet()

// Create a function that takes two numbers and returns their sum
// function sum(a,b){
//     return a+b
// }

// console.log(sum(5,5))

// Write a function that prints "Good Morning"
// function greet(){
//     console.log('Good Morning')
// }

// greet()

// function calculation(Weightinkg,heightinmeter){
//      let bmi=Weightinkg/(heightinmeter*heightinmeter)
//      return  bmi
// }

// let result = calculation(70,1.75)

// console.log(result.toFixed(2))

// function greeting(name){
//     console.log(`welcome ${name}`)
// }

// greeting("raghu")



// function Grade(mark){


// if(mark>=80 && mark<=100){
//     return 'A'
// }
// else if(mark>=71 && mark<=79){
//     return 'B'
// }
// else if(mark>=61 && mark<=69){
//     return 'C'
// }
// else if(mark>=51 && mark<=59){
//     return 'D'
// }
// else{
//     return 'F'
// }
// }
// console.log(Grade(80))

let arr=[1,2,3,4,5]

arr.forEach(arr => {
    console.log(arr*2)
});

let auu= arr.map(num=>{
    return num*2
})
console.log(auu)