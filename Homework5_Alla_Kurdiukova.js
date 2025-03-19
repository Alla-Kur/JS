
const services = {
    "cut": "100 uah",
    "shaving": "80 uah",
    "washing": "60 uah",
    getCut(){
        console.log(`service Cut: ${this.cut}`);
    },
    getSum(...services) {
       let total = 0;
       for (const service of services) {
        total += service;      
     }
     console.log(`services Sum: ${this.services}`);
    },
    getMax() {
        Math.max();
      console.log(`services Max: ${this.services}`);
     },
     getMin() {
        Math.min();
      console.log(`services Min: ${this.services}`);
     }
};
services.getCut();
services.getSum();
services.getMax();
services.getMin();

services.makeUp = "110 uah";
services["hairstyle"] = "120 uah";

// console.log(services);

// const {cut, shaving, washing, makeUp, hairstyle} = services;
// // console.log(cut, typeof cut);

// const cutNum = Number.parseInt(cut);
// const shavingNum = Number.parseInt(shaving);
// const washingNum = Number.parseInt(washing);
// const makeUpNum = Number.parseInt(makeUp);
// const hairstyleNum = Number.parseInt(hairstyle);
// // console.log(cutNum, typeof cutNum);

// function sum(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//   return  total;
// }
// const price = sum(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
// console.log("The total cost of services: ", price);


// function min() {
//     return Math.min();
// }
// const minPrice = min(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
// console.log("The minimum cost of the service: ", minPrice); // Результат: Infinity

// function max() {
//     return Math.max();
// }
// const maxPrice = max(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
// console.log("The maximum cost of the service: ", maxPrice); // Результат: -Infinity






