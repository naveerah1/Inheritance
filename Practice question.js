class person{
  constructor(name,age){    //constructor is a special method in js
    this.name=name;
    this.age=age;
  }
}
//method to get details
getdetails(){
  return "Name: "+this.name+" Age: "+this.age;
}
//static method it doesnot require object to be created
static species() {
  return 'Homo sapiens';
}
}
//creating object
const person1 = new person('bobzz',30);
const person2 = new person('jimmy',20);
//calling method
console.log(person1.getdetails());
console.log(person2.getdetails());
//calling static method
console.log(person.species());