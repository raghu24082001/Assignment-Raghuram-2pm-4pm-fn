// class Product{
//     constructor(name,price){
//           this.name=name
//           this.price=price
//     }
//     discountedPrice(){
//         console.log(`${this.name} price is ${this.price}`)
//     }
// }

// const pro = new Product('Jelly',5)

// pro.discountedPrice()

// class student{
//     constructor(name,grade){
//      this.name=name
//      this.grade=grade
//     }
//     display(){
//         console.log(`${this.name} is ${this.grade} grade`)
//     }
// }

// const s1 = new student("raghu",10)
// const s2 = new student("ragav",10)
// const s3 = new student("ram",10)

// s1.display()
// s2.display()
// s3.display()

// class shape{
//     constructor(name){
//            this.name=name
//     }
//     display(){
//         console.log(`shape name is ${this.name}`)
//     }
// }

// class Circle extends shape {
//     constructor(name,input){
//         super(name)
//         this.input=input
//     }
//     display(){
//         const area= 3.14*(this.input)*(this.input)
//         console.log(`Area of ${this.name} is ${area}`)
//     }
// }

// const Ans = new Circle('circle',5)

// Ans.display()

// class student{
//     constructor(name,grade){
//      this.name=name
//      this.grade=grade
//     }
//     display(){
//         console.log(`${this.name} is ${this.grade} grade`)
//     }
// }

// student.prototype.stud=function(){
//     console.log(`Hi ${this.name}`)
// }

// const roll = new student('raghu')

// roll.stud()