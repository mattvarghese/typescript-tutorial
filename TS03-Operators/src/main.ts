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
// + : for string concatenation
str = str + "DEF";
console.log('str = str + "DEF": ' + str);  // ABCDEF



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
console.log("x--: " + x--);      // Postfix: use, then chnge
console.log("x after x--: " + x);
console.log(`x--: ${x--}`);      // Postfix: use, then chnge
console.log("x after x--: " + x);

// Comparison operators

// logical operators

// bitwise operators
// Also have assignment version

// comma operator

// conditional operator

// Other operators

// Operator precedence


