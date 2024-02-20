/*function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var ab=x();
console.log(ab)*/

function init(){
    var name="Mozialla";//name is a local variable created by init..
    function display(){
        //display() is the inner fucntion that forms the closure..
        console.log(name);// use the variable declared in the parent funciton..
    }
    display();
}
init();
/*when we call the init() function it will execute all its code including the  
inner function display()..at this point, there are two scopes one for each function 
so when display() tries to access the 'name' variable it finds it in its own scope and not  
in the outer functions scope so it displays 'undefined'. But since JavaScript has first-class 
functions (which means functions can be passed as arguments to other functions just like any  
other data type - number, string etc.) we can control how these functions interact with their 
parent scopes using closures. In the example above, the inner function 'display' has access to  
the 'name' variable because it was declared inside of the 'init' function which makes up its   parent  scope. So if we want to make sure that the 'display' function only has access to the
the 'name' variable because of the closure. So even though 'display' is called outside of    
its declaration it still knows what 'name' is referring to.*/

/*if (Math.random() > 0.5) {
    const x = 1;
  } 
  else {
    const x = 2;
  }
  console.log(x);
  */

  /*function setWidth(){
    var width = 100;
    console.log(width);
}
setWidth()*/

/*var age = 100;
  if (age > 12){
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
  dogYears;*/

  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();//myFunc is a refrence to the  displayName funciton that is created when the makeFunc is run..
