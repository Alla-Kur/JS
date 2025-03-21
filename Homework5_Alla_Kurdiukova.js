const services = {
  cut: "100 uah",
  shaving: "80 uah",
  washing: "60 uah",

price () {
  for (let key in services) {
    if (typeof this[key] === Function) {
      continue;
    }
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
  return  total;
}
const price = sum(this);
console.log("The total cost of services: ", price);
}
},
maxPrice() {
  for (let key in services) {
    if (typeof this[key] === Function) {
      continue;
    }
    num = Number.parseInt(this[key]);
      console.log(num, typeof num);
    }; 
    console.log("services maxPrice: ", Math.max(num)); 
  },
   
minPrice() {
  for (let key in services) {
    if (typeof this[key] in services === Function) {
      continue;
  }
    num2 = Number.parseInt(this[key]);
    console.log(num2, typeof num2);
};
console.log("services minPrice: ", Math.min(num2));
},
// addService () {
// this.push([key]);
// },
};
services.price();
services.maxPrice();
services.minPrice();
// services.addService(makeUp, "110 uah");

services.makeUp = "110 uah";
services["hairstyle"] = "120 uah";


console.log(services);

