// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators



// Assignment Operator
console.log("\n== Assignment Operator ==");
let x: number;
x = 90;
console.log("x = 90: " + x);
let str: string;
str = "ABC";
console.log('str = "ABC": ' + str);
let bool: boolean;
bool = true;
console.log("bool = true: " + bool);
// multiple
let y: number, z: number;
y = z = 42;
console.log("y: " + y + ", z:" + z);



// Destructuring
console.log("\n== Destructuring ==");
// for arrays
let arr = ["alpha", "beta", "gamma"];
let [v1, v2, v3] = arr;
console.log("v1: " + v1 + ", v2: " + v2 + ", v3: " + v3);
// similarly for objects
let obj = { propX: 1, propY: 2 };
let { propX, propY } = obj;    // names must match object
console.log("propX: " + propX + ", propY: " + propY);
// See this often in functions, where the param is an object
// which is destructured immediately on function entry.



// Arithmetic Operators
console.log("\n== Arithmetic Operators ==");
// + - * /
x = x + 10;
console.log("x = x + 10: " + x);           // 100
x = x - 1;
console.log("x = x - 1: " + x);            // 99
x = x / 9;
console.log("x = x / 9: " + x);            // 11
x = x * 4;
console.log("x = x * 4: " + x);            // 44
// % - Modulus / Remainder
x = x % 10;
console.log("x = x % 10: " + x);           // 4
// ** - exponentiation operator
console.log("2 to the power 4: " + (2.1 ** 4.5));  // 28.182...
// + : for string concatenation
str = str + "DEF";
console.log('str = str + "DEF": ' + str);  // ABCDEF
// String + another type
console.log(str + true);                   // ABCDEFtrue
console.log(str + 12345);                  // ABCDEF12345



// Arithmetic Assignment Operators
console.log("\n== Arithmetic Assignment Operators ==");
x += 10;  // same as x = x + 10
console.log("x += 10: " + x);              // 14
// Also -=, *=, /=, %=
// += on strings
str += "GHI";
console.log('str += "GHI": ' + str);       // ABCDEFGHI



// Increment/Decrement Operators
console.log("\n== Increment/Decrement Operators ==");
console.log(`++x: ${++x}`);      // Prefix: change, then use
console.log("x after ++x: " + x);
console.log("--x: " + --x);      // Prefix: change, then use
console.log("x after --x: " + x);
console.log("x--: " + x--);      // Postfix: use, then change
console.log("x after x--: " + x);
console.log(`x--: ${x--}`);      // Postfix: use, then change
console.log("x after x--: " + x);



// Comparison operators
console.log("\n== Comparison operators ==");
console.log("x > 100: " + (x > 100));      // false
console.log("x >= 10: " + (x >= 10));      // true
console.log("x < 12: " + (x < 12));        // false
console.log("x <= 12: " + (x <= 12));      // true
// With strings - use with caution
console.log('"100" > "10": ' + ("100" > "10"));    // true
console.log('"90" < "300": ' + ("90" < "300"));    // false
console.log('"A" <= "B": ' + ("A" <= "B"));        // true
console.log('"10B" >= "1A": ' + ("10B" >= "1A"));  // false
//console.log('"100" > 10: ' + ("100" > 10));      // No can't do
// Equality/Inequality comparisons
console.log("x == 12: " + (x == 12));      // DO NOT USE
// console.log(x == '12');                 // legal in JavaScript
// console.log("" == false);               // legal in JavaScript
// strict equality/inqeuality
console.log("x === 12: " + (x === 12));    // true
console.log("x !== 12: " + (x !== 12));    // false
// === and !== also work on strings, booleans etc
console.log("str === 'ABCDEFGHI': "
    + (str === "ABCDEFGHI"));              // true
// Generally, always use strict equal / not equal operators.


// Logical Operators
console.log("\n== Logical Operators ==");
let result: boolean;
// AND
result = 100 > 10 && 9 <= 9;
console.log("100 > 10 && 9 <= 9: " + result);
// always use parenthesis
result = (100 > 10) && (9 <= 9);
console.log("(100 > 10) && (9 <= 9): " + result);
// OR
result = (100 < 10) || (9 <= 9);
console.log("(100 < 10) || (9 <= 9): " + result);
// NOT
result = (!result);
console.log("(!result): " + result);
// * short circuit
console.log("x is: " + x);                 // 12
result = (100 < 10) && (++x < 20);         // first result false
console.log("x after (100 < 10) && (++x < 20): " + x); // no change
result = (10 < 100) || (++x < 20);         // first result true
console.log("x after (10 < 100) || (++x < 20): " + x); // no change
// * use for default values
let unused: string | undefined;
let withDefault = unused || "default-value";
console.log("withDefault: " + withDefault);
// ?? - nullish coalescing operator
// Use this in preference to || for defaults
withDefault = unused ?? "new-default";
console.log("withDefault: " + withDefault);
// Also have assignment versions, except NOT
// &&=, ||=, ??=



// Bitwise Operators
console.log("\n== Bitwise Operators ==");
let bitResult: number;
bitResult = 18 & 25;  // AND: 18 = 10010, 25 = 11001
console.log("9 & 11: " + bitResult);       // 16 = 10000
bitResult = 18 | 8    // OR: 8 = 01000
console.log("18 | 8: " + bitResult);       // 26 = 11010
bitResult = 18 ^ 24    // XOR: 24 = 11000
console.log("18 ^ 24: " + bitResult);      // 10 = 01010
// Bitwise NOT is tricky
// -ve numbers stored as complement of (|num| - 1)
bitResult = ~bitResult;
console.log("~bitResult: " + bitResult);   // 1...11110101 = -11
// Ref: https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
console.log("~bitResult bas2 : " + (bitResult >>> 0).toString(2));
bitResult = 16 >> 2;  // right shift
console.log("16 >> 2: " + bitResult);      // 4
bitResult = -11 >> 2;  // -11 = 1...11110101
console.log("-11 >> 2: " + bitResult);     // 4
bitResult = -11 >>> 2  // Zero-fill right shift
console.log("-11 >>> 2: " + bitResult);    // 01...111101 = +ve
bitResult = 16 << 2  // left shift - same as multiply by 2 ^ N
console.log("16 << 2 : " + bitResult);     // 64
bitResult = -11 << 2
console.log("-11 << 2 : " + bitResult);    // 44
// No Zero/One -fill left shift. Always zeros from right
// Also have assignment versions, except bitwise NOT
// &=, |=, ^=, >>=, >>>=, <<=



// comma operator
// Evaluates left to right, last value is the result
console.log("x is: " + x);                 // 12
x = (++x, x + 5, x - 1);  // 13, 13+5 does nothing, 13-1=12
console.log("x = ++x, x+5, x-1: " + x);    // 12
// AVOID using - generally just causes confusion!



// conditional operator

// Other operators

// Operator precedence


