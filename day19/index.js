let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let symbol = document.getElementById('select')
let answer = document.getElementById('answer')

let form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const value1=parseInt(input1.value)
    const value2 = parseInt(input2.value)
    const ope = symbol.value
    let final=''

switch(ope){
    case '+':
         final = value1+value2
    break
    case '-':
         final = value1-value2
    break
    case '*':
    final = value1*value2
    break
    case '/':
    final = value1/value2
    break
    case '%':
    final = value1%value2
    break

}

answer.innerHTML=`Answer is ${final}`






})