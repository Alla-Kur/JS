
function checkProbabilityTheory(count) {
  let rnd = 0;
  let min = 100;
  let max = 1000;
  let paired = 0;
  let unpaired = 0;
for (let i = 0; i < count; i++) {
  rnd = Math.round(Math.random() * (max - min + 1) + min);
if (rnd % 2 === 0) {
  paired++;
} else {
  unpaired++;
};
};
console.log("Кількість згенерованих чисел: " + count);
console.log("Парних чисел: " + paired);
console.log("Непарних чисел: " + unpaired);
console.log("Відсоток парних: " + (paired * 100 / count) + "%");
console.log("Відсоток непарних: " + (unpaired * 100 / count) + "%");
};
checkProbabilityTheory (50);