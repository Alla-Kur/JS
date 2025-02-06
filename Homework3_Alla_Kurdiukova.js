function pow() {
    for (let x = 2; x < 20; x *= 2) {
      if ( x === 2) {
       continue;
      }
      if (x === 4) {
        continue;
      }
      if (x === 8) {
        console.log (x);
      }
      if (x === 16) {
        break;
      }
    }
    console.log (`Результат: ${pow}`);
   }
  
