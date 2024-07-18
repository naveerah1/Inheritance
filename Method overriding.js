class employee {
  login(){
    console.log("employee can login");
  }
  logout(){
    console.log("Employee can logout");
  }
  requestLeaves(leaves){
    console.log("Employee has requested ${leaves} leaves");
  }
}
class programmer extends employee{
  requestCoffee(x){
    console.log("Employee has requested ${x} coffee");
  }
  requestLeaves(leaves){
    //super keyword is used to call the parent class method
    super.requestLeaves(4);
    console.log("One extra is granted");
    // console.log("Employee has requested ${leaves+1} leaves (one extra)");
  }
}
let emp = new employee("Taha");
emp.login();
emp.requestLeaves();