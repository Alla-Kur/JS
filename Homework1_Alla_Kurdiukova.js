// Завдання 1: 'Number' + 3 + 3

const str = 'Number';
const num = 3;
const result1 = str + num + num;
console.log (result1); // Результат: 'Number33', тип string. Спрацьовує неявне перетворення: num -> string та значення змінних конкатинуються.


// Завдання 2: null + 3

const variable = null;
const num1 = 3
const result2 = variable + num1;
console.log (result2); // Результат: 3, тип number. null не явно перетвворюэться на 0 і додається до числа 3.


// Завдання 3: 5 && "qwerty"

const num2 = 5;
const str1 = "qwerty";
const result3 = num2 && str1;
console.log (result3); // Результат: "qwerty"
// Оператор && обчислив операнди зліва направо.
// Пертворив їх на булеві: 5 = true; qwerty = true
// Так як обидва операнди true, то повертається останній: "qwerty"


// Завдання 4: +'40' + +'2' + "hillel";

const first = +'40'; // Неявне перетворення в 40 (унарний оператор (+) намагається перетворити операнд в число)
const second = +'2'; // Неявне перетворення в 2. В цій частині виразу отримуємо 42, тип Number
const third = "hillel"; // Тип String
const result4 = first + second + third;
console.log (result4); // Результат: 42hillel - відбулась конкатинація значеннь типів Number та String


// Завдання 5: '10' - 5 === 6;

const str2 = '10'; // Тип String
const num3 = 5; // Тип Number. Першою виконається частина виразу "'10' - 5", так як у оператора "-" пріоритет вище ніж, у "==="
                // Результат: 5, так як в матем. функціях відбувается неявне перетворення на числа: '10' - 5 = 10 - 5 = 5.
const num4 = 6;
const result5 = str2 - num3 === num4;
console.log (result5); // Результат: false, так як 5 строго не дорівнює 6.


// Завдання 6: true + false

const value1 = true; // Неявно перетворюється в 1, тип Number
const value2 = false; // Неявно перетворюється в 0, тип Number
const result6 = value1 + value2; // = 1 + 0
console.log (true + false); // результат: 1


// Завдання 7: '4px' - 3

const value3 = '4px'; // Тип String. При виконанні матем. дії рядок автоматично перетворюється в число. Але Це значення не дыйсне число, тому воно набуває значення NaN.
const num5 = 3; // Тип Number
const result7 = value3 - num5; // Результат: NaN, тому що '4px' - 3 = NaN - 3 = NaN
console.log (result7);


// Завдання 8: '4' - 3

const str3 = '4'; // Тип String; При виконанні матем. дій автоматично перетвориться в тип Number = 4
const num6 = 3;
const result8 = str3 - num6; // Результат: 1. '4' - 3 = 4 - 3 = 1.
console.log (result8);


// Завдання 9: '6' + 3 ** 0;

const str4 = '6';
const num7 = 3 ** 0; // Результат: 1, виконується матем. дія - будь-яке число в нульовій степені дорівнює 1.
const result9 = str4 + num7; // Відбувається конкатинація значень різних типів: String + Number = '6' + 1
console.log (result9); // Результат:"61"


// Завдання 10: 12 / '6'

const num8 = 12;
const str5 = '6'; //Перетворюється на тип Number при виконанні математичних дій
const result10 = num8 / str5; // Результат: 12 / '6' = 12 / 6 = 2.
console.log (result10); // Результат 2.


// Завдання 11: '10' + (5 === 6);

const str6 = '10'; // Тип String
const bool = (5 === 6); // Результат: false, тому що 5 строго не дорівнює 6. Тип Boolean.
const result11 = str6 + bool; // '10' + (5 === 6) = '10' + false
console.log (result11); // Результат: '10false', Тип String.


// Завдання 12: null == ''

console.log (null == ''); //Результат: false, тому що тип '' - String і ця частина виразу не дорівнює null.


// Завдання 13: 3 ** (9 / 3);

const num9 = (9/3);
const num10 = 3;
const result13 = num10 ** num9;
console.log (result13); // Результат: 27, Тип6: Numder.


// Завдання 14: !!'false' == !!'true' 

// !!'false' = true. Рядок не порожній, тому 'false' = true. !'false' поверне false і другий ! перетворює false в true.
// !!'true' = true.  Рядок не порожній, тому 'true' = true. !'true' поверне false і другий ! перетворює false в true.
console.log(!!'false' == !!'true'); // Результат: true.


// Завдання 15: 0 || '0' && 1

 // По пріоритетності оператор && вище, тому виконується першим: '0' && 1 = true && true. 
 // Так як обидва значення правдиві, повертається останнє в початковому значенні : 1.
// Далі порівнюються 0 || 1 = false || true і повертається перше правдиве значення, в цьому випадку 1.
console.log (0 || '0' && 1); // Результат: 1 (true)


// Завдання 16: (+null == false) < 1;

// +null = 0;
// false = 0;
// Вираз набуває вигляду: (0 == 0) < 1;
// Результат: ture.


// Завдання 17: false && true || true; Результат: true
// false && true // Результат: false
//  Далі false || true = true.


// Завдання 18: false && (false || true);

// першими порівнюються значення в дужках (false || ture) = true, тому що оператор АБО повертає перше правдиве значення.
// далі виконується оператор І: false && true = false, тому що оператор І перше не правдиве значення.
// Результат: false.


// Завдання 19: (+null == false) < 1 ** 5;

// +null перетворюється на 0 і тоді (0 == false) // true; Тому що оператор порівняння == не відрізняє 0 від false.
// так як (+null == false) повертає true, а далі має виконатись порівняння з числом: "< 1 ** 5", то true перетворюється на 1 і вираз набуває виду: 1 < 1 ** 5
// 1 ** 5 = 1; 
// В результаті всіх перетворень і обчислень початковий вираз приводиться до виду: 1 < 1;
console.log ((+null == false) < 1 ** 5); // Результат: false.
