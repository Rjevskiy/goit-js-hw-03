// function makeTransaction(quantity, pricePerDroid, customerCredits) {

// let totalPrice = quantity * pricePerDroid

// if ( totalPrice > customerCredits )
//     { return "Insufficient funds!"; }

// else
//     { return `You ordered ${quantity} droids worth ${totalPrice} credits!`; }
    
// }
   


// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"



function getSlice(array, value) {




    console.log(array.slice (0 , array.indexOf(value)))
   
    
}

getSlice(["Mango", "Poly", "Ajax"], "Poly") //повертає["Mango", "Poly"]
getSlice(["Mango", "Poly", "Ajax"], "Ajax") //повертає["Mango", "Poly", "Ajax"]
getSlice(["Mango", "Poly", "Ajax"], "Mango") //повертає["Mango"]
getSlice(["Mango", "Poly", "Ajax"], "Jacob") //повертає[]
getSlice(["Mango", "Poly", "Ajax"], "Casey") //повертає []