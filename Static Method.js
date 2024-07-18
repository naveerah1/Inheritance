//without constructor
class MAthutil{
  static add(a,b){
    return a+b;
  }
  static subtract(a,b){
    return a-b;
  }
}
console.log(MAthutil.add(2,3));
console.log(MAthutil.subtract(5,3));
//instance
const mathutil = new MAthutil();
console.log(mathutil.add(2,3));


//with constructor
class MathUtil {
  constructor(value) {
    this.value = value;
  }

  // Instance method to add a number to the instance value
  addToValue(num) {
    return this.value + num;
  }

  // A static method to add two numbers
  static add(a, b) {
    return a + b;
  }

  // A static method to subtract two numbers
  static subtract(a, b) {
    return a - b;
  }
}

// Creating an instance of MathUtil
const mathUtilInstance = new MathUtil(10);

// Calling instance method
console.log(mathUtilInstance.addToValue(5)); 
console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3)); 
try {
  console.log(mathUtilInstance.add(5, 3)); 
} catch (error) {
  console.log(error.message); 
}
