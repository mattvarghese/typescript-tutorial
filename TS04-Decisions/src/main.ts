// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

// Decisions

// Conditional Operator (Last lesson)
console.log("\n== Conditional Operator ==");
console.log((10 > 100) ? "(10>100) is true" : "(10>100) is false");

// If statement
console.log("\n== If statement ==");
if (10 < 100) console.log("10 is less than 100");

// Blocks and Variable Scopes
console.log("\n== Blocks and Variable Scopes ==");
// Basic block
if (42 < 100) {
    console.log("42 is less than 100");
}
if (true) {
    let innerVar = 100;
    console.log("innerVar inside block: " + innerVar);
}
// console.log("innerVar outside block: " + innerVar); - no can't do

// Else statement
console.log("\n== Else statement ==");
if (33 > 100) {
    console.log("33 is greater than 100");
} else {
    console.log("33 is not greater than 100");
}

// Nested if/else statement
console.log("\n== Nested if/else statement ==");
let x = 42;
if (x > 100) {
    if (x > 50) {
        console.log("x is greater than 50");
    } else {
        console.log("x is less than 50");
    }
} else {
    if (x > 1000) {
        console.log("x is greater than 1000");
    } else {
        console.log("x is greater than 100");
    }
}

// if-else-if ladder

// Exception Handling

// Switch statement
