

/*function one(call_two)
{
    call_two();
    console.log("HIII");
    
}

function two()
{
    console.log("Hello");
}
one(two);*/ 

/*Why do we use callbacks?
When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.*/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
//console.log(stocks.Fruits[2]);


let order=(Fruit_name,call_prod)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected `);
        call_prod();
    },2000)//So the setTimeout Function prints the result after two seconds..i.e., it selects the fruit after two seconds..
    
};

let prod=()=>{
    console.log("order recieved,starting prod");
//Step -1 in the ice-cream making process
    setTimeout(()=>{
        console.log("Production started")//This becomes the parent function..
//Step -2 in the ice-cream making process
        setTimeout(()=>{
           console.log("The Fruit has been Chopped"); 
//Step -3 in the ice-cream making process
           setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            setTimeout(()=>{
                console.log("Start the machine");
                setTimeout(()=>{
                    console.log(`Ice cream placed on ${stocks.holder[1]}`)   
                },2000)
                setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} as toppings`)
                    setTimeout(()=>{
                        console.log("serve Ice cream") 
//So, this is what is a "CALLBACK HELL" ..we can identify it by seeing the structure of the code ...it quite resembles kindaa X-mas tree..It is also referred as the "PYRAMID OF DOOM".
                    },2000)
                },3000)
               

            },1000)
           },1000)
        },2000)
    },0o0);


};

order(0,prod);

