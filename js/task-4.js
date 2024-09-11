
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const orders of order) {
//     total += orders;
  
//   }
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]) //повертає 138
// calculateTotalPrice([164, 48, 291]) //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116
// calculateTotalPrice([]) //повертає 0



// function createReversedArray() {
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         //reurn[!i];
//     }
// console.log(element);

// }





// createReversedArray(12, 85, 37, 4) //повертає [4, 37, 85, 12]
// createReversedArray(164, 48, 291) //повертає [291, 48, 164]
// createReversedArray(412, 371, 94, 63, 176) //повертає [176, 63, 94, 371, 412]




// function calculateTax(amount, taxRate = 0.2) {
//     let proc = amount * taxRate;
//     console.log(proc);
    
// }


// calculateTax(100, 0.1) //повертає 10
// calculateTax(200, 0.1) //повертає 20
// calculateTax(100, 0.2) //повертає 20
// calculateTax(200, 0.2) //повертає 40
// calculateTax(100, 0.3) //повертає 30
// calculateTax(200, 0.3) //повертає 60
// calculateTax(100) //повертає 20
// calculateTax(200) //повертає 40

// -----------------------------------------

// образец

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// console.log(keys);




  
const book = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(book);
console.log(keys);
    
const values = Object.values(book);
console.log(values);

for (const values in book) {
        console.log(book[values]);}

