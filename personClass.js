//Q.3 Write a “person” class to hold all the details.

class person{
    
constructor(name,age,qualification){ 
    //data member
     this.name=name
     this.age=age
     this.qualification=qualification
}
//actions
  sleep(){
    return `${this.name} sleeps during the class`
  }
  drive(){
    return `${this.name}, whose age is ${this.age} can drive a car`
  }
  study(){
    return `${this.name} has completed his ${this.qualification}`
  }

}

let person1=new person("raj",23,"B.Tech") //object creation

console.log(person1.sleep())
console.log(person1.drive())
console.log(person1.study())