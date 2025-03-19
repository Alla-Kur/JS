
const services = {
    "cut": "100 uah",
    "shaving": "80 uah",
    "washing": "60 uah",
    getCut(){
        console.log(`servise Cut: ${this.cut}`);
    },
    getShaving(){
        console.log(`servise Shaving: ${this.shaving}`);
    }, 
    getWashing(){
        console.log(`servise Washing: ${this.washing}`);
    },
};
services.getCut();
services.getShaving();
services.getWashing();


services.makeUp = "110 uah";
services["hairstyle"] = "120 uah"; // Як вивести ці властивості через get не розібралась

// console.log(services);

const {cut, shaving, washing, makeUp, hairstyle} = services;
// console.log(cut, typeof cut);
// console.log(shaving, typeof shaving);
// console.log(washing, typeof washing);
// console.log(makeUp, typeof makeUp);
// console.log(hairstyle, typeof hairstyle);

const cutNum = Number.parseInt(cut);
const shavingNum = Number.parseInt(shaving);
const washingNum = Number.parseInt(washing);
const makeUpNum = Number.parseInt(makeUp);
const hairstyleNum = Number.parseInt(hairstyle);

// console.log(cutNum, typeof cutNum);
// console.log(shavingNum, typeof shavingNum);
// console.log(washingNum, typeof washingNum);
// console.log(makeUpNum, typeof makeUpNum);
// console.log(hairstyleNum, typeof hairstyleNum);

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
  return  total;
}
const price = sum(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
console.log("The total cost of services: ", price);


function min() {
    return Math.min();
}
const minPrice = min(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
console.log("The minimum cost of the service: ", minPrice); // Результат: Infinity

function max() {
    return Math.max();
}
const maxPrice = max(cutNum, shavingNum, washingNum, makeUpNum, hairstyleNum);
console.log("The maximum cost of the service: ", maxPrice); // Результат: -Infinity






