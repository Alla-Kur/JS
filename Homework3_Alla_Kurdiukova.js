//ПЕРЕРОБЛЕНО
function pow (x, y) {
    let result = 1;
      for (let i = 1; i <= y; i++) { 
      result *= x;
      };
      return result;
    };
    const numberInDegree = pow (3, 4);
    console.log(`Результат: ${numberInDegree}`);



// НЕ КОРРЕКТНЕ ВИКОНАННЯ
//  function pow() {
//     for (let x = 2; x < 20; x *= 2) {
//       if ( x === 2) {
//        continue;
//       }
//       if (x === 4) {
//         continue;
//       }
//       if (x === 8) {
//         console.log (x);
//       }
//       if (x === 16) {
//         break;
//       }
//     }
//     console.log (`Результат: ${pow}`);
//  


