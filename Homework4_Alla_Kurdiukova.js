function checkProbabilityTheory(count) {
for (let i = 0; i<= count; i++) {
    let min = 100;
    let max = 1000;
    let rnd = Math.round(Math.random() * (max - min + 1) + min);
    console.log (rnd);
     if (rnd % 2 === 0) {
        rnd.count++;              // Виходить безкінечний цикл, тому що для підрахунку парних / непарних чисел я використала count++. Підкажіть, будь ласка, чим це замінити?
       rndSum1= rnd += rnd / 100;
         const count2 = rnd.count++;
        console.log ("parne", rnd.count, count2);
    } else {
        const count3 = rnd.count++;
        rndSum2= rnd += rnd / 100;
        const count4 = rnd.count++;
      console.log ("neparne", count3, count4);
    };
};
};
const probabilityTeory = checkProbabilityTheory(2);
console.log(count, rnd.count, count3, count2, count4); // Виведення данних не зроблене до кінця. Хочу спочатку виправити логіку.