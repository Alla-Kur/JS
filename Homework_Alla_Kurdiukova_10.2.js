const str = "Technology has revolutionized the way we live, work, and communicAte.";
// const str = "Wonderful, Joyful, Happiness, Time, Task, Applet";
const pattern = /\b[^a]*\w{6,}\b/gi;
const matches = str.match(pattern);
console.log(matches);
console.log(pattern.test(str));