class animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(`${this.name} is eating`);
  }
  run(){
    console.log(`${this.name} is running`);
  }
}
class monkey extends animal{
  jump(){
    console.log(`${this.name} is jumping`);
  }
  shout(){
    console.log(`${this.name} is shouting`);
  }
}
const anim = new animal("Lion",10);
const mon = new monkey("Chimpu",5);
mon.jump();
mon.shout();

//Example 2
class person {
  constructor(name){
    this.name = name;

  }
  walk(){
    console.log('$(this.name) is walking');
  }
  run(){
    console.log('$(this.name) is running');
  }
}
class employee{
  constructor(name,age){
    super(name) //calling the parent constructor
    this.age= age
  }
  shout(){
    console.log('$(this.name) is shouting');
  }
}
const emp = new employee("Ram",25);
emp.walk();