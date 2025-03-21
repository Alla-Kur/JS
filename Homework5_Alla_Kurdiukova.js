const services = {
  cut: "100 uah",
  shaving: "80 uah",
  washing: "60 uah",

price () {
  let price = 0;
  for (let key in services) {
    let keyType = typeof this[key];
    if (keyType === "string" || keyType === "number") {
      price += Number.parseInt(this[key]);
}
}
return price;
},
maxPrice() {
  let num = 0;
  for (let key in services) {
    let keyType = typeof this[key];
    if (keyType === "string" || keyType === "number") {
      if (Number.parseInt(this[key]) > num) {
        num = Number.parseInt(this[key]);
      };
    }; 
  }
  return num;
},
minPrice() {
  let num = Infinity;
  for (let key in services) {
    let keyType = typeof this[key];
    if (keyType === "string" || keyType === "number") {
      if (Number.parseInt(this[key]) < num) {
        num = Number.parseInt(this[key]);
      };
    }; 
  }
  return num;
},
};

services.makeUp = "110 uah";
services["hairstyle"] = "120 uah";

console.log("Total price: ", services.price());
console.log("Max price: ", services.maxPrice());
console.log("Min price: ", services.minPrice());






