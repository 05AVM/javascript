let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open=false;


let order=(time,work)=>{
return new Promise( (resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
            resolve(work());
//The anonymous arrow function () => console.log(${stocks.Fruits[0]} was selected) represents the work function in this context. It is a concise way of defining a function that logs a message to the console.

        },time);

    }
    else{
            reject(console.log("Our shop is Closed"))
        }

    });


};

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected` ))

.then(()=>{
    return order(0o0,()=>console.log("production has started"));
})
//the .then() method is used to handle the fulfillment of a preceding Promise or the completion of an asynchronous operation. 

//Within the .then() callback, the order function is called, passing arguments and an anonymous callback function. 

.then(()=>{
    return order(2000,()=>console.log("THe Fruit was chopped.."));
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`));
})

.then(()=>{
    return order(1000,()=>console.log("THe Machine is started.."));
})

.then(()=>{
    return order(2000,()=>console.log(`THe Container is selected which is ${stocks.holder[2]} ..`));
})

.then(()=>{
    return order(3000,()=>console.log(`The toppings has been selected which is ${stocks.toppings[1]}`));
})

.then(()=>{
    return order(2000,()=>console.log("The Ice-cream is been Served.."));
})

//So this is what is said to be the promise chaining...its then after then and again then ...and it goes on until all aour promises gets resolved.

.catch(()=>{
    console.log("Customer left");
})

.finally(()=>{
    console.log("DAY ENDED..SHOP CLOSED")
})




