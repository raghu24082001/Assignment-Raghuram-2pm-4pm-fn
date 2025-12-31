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

// let prices = [2,3,4]
// let sum=0
// for(let key of prices){
//      sum+=key

// }
// console.log(sum)


const correctPassword = "1234";
let userPassword;

do {
  userPassword = prompt("Enter your password:");
} while (userPassword !== correctPassword);

alert("Login successful!");