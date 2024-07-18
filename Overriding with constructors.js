class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`)
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`);
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)

  }
}

let e = new Programmer("Harry")
e.login()
e.requestLeaves(3)

//Example no 2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Overriding the getDetails method and using super to call the superclass method
  getDetails() {
    const parentDetails = super.getDetails(); // Call the getDetails method from Person
    return `${parentDetails} Job Title: ${this.jobTitle}`;
  }
}

const employee = new Employee('Charlie', 35, 'Developer');
console.log(employee.getDetails()); // Charlie is 35 years old. Job Title: Developer
