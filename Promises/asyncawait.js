// PROMISES STRUCTURE

/* 
order()
.then()
.then()
.then()
.catch()
.finally()
*/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}

//Now we write an async function to start the production ..

async function kitchen(){
    try{
        //the line await time(2000) in the kitchen() function invokes the time function with an argument of 2000, causing the function to execute and return a Promise. The await keyword then pauses the execution of the kitchen() function until the Promise is resolved.
        
        await time(2000)
        console.log(`${stocks.Fruits[2]}`);
        
        await time(0o0)
        console.log("START THE PROD")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")



    }
    catch(error){console.log("Customer left",error)}
    finally{console.log("DAY ENDED,SHOP is CLOSED")}
}
kitchen();




 /*let toppings_choice=()=>
 {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    
          resolve( console.log("which topping would you love?") )
    
        },3000)
      })
 }

 async function kitchen(){

   

    console.log("A")
    console.log("B")
    console.log("C")

     //So I am working in the kitchen and all the tasks are going on and now I need to ask the customer which toppings would he love ..So I need to go out of the kitchen to ask what he likes..although all the other tasks goes as it is..
    
    await toppings_choice()
    
    console.log("D")
    console.log("E")
  
  }
  
  // Trigger the function
  
  kitchen();
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")*/


 /*async function order(){
    try{
        await abc;
    } catch(error){
        console.log("abc doesn't exists , error");
    }
    finally{
        console.log("runs code anyway");
    }
    }

    order();
    //It happens after the promise is resolved

    order().then(()=>{
        console.log("Then outside async/await");
    })
*/ 