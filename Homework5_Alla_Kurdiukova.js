
const services = {
    "cut": "100 uah",
    "shaving": "80 uah",
    "washing": "60 uah",
// Десь тут має бути деструктуризація чи вона не потрібна в цьому завданні?
price () {
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
  return  total;
}
const price = sum(this);
console.log("The total cost of services: ", price);
},
    maxPrice() {
        console.log("services maxPrice: ", Math.max(this)); // Десь тут має бути застосований Number.parseInt(), але не розумію як
     },
     minPrice() {
      console.log("services minPrice: ", Math.min(this)); // Десь тут має бути застосований Number.parseInt(), але не розумію як
     }
};

services.price();
services.maxPrice();
services.minPrice();

services.makeUp = "110 uah";
services["hairstyle"] = "120 uah";

console.log(services);

// const {cut, shaving, washing, makeUp, hairstyle} = services;
// // console.log(cut, typeof cut);

// const cutNum = Number.parseInt(cut);
// const shavingNum = Number.parseInt(shaving);
// const washingNum = Number.parseInt(washing);
// const makeUpNum = Number.parseInt(makeUp);
// const hairstyleNum = Number.parseInt(hairstyle);
// // console.log(cutNum, typeof cutNum);

