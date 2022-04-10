// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

// Decisions
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling



// Conditional Operator (Last lesson)
console.log("\n== Conditional Operator ==");
console.log((10 > 100) ? "(10>100) is true" : "(10>100) is false");



// If statement
console.log("\n== If statement ==");
let userInput = "typescript";
if (userInput === "typescript") console.log("userInput is typescript!");



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
console.log("\n== if-else-if ladder ==");
if (x < 10) {
    console.log("x is less than 10");
} else if (x < 100) {
    console.log("x is less than 100");
} else if (x < 1000) {
    console.log("x is less than 1000");
} else {
    console.log("x is a very large number");
}



// switch statement
console.log("\n== switch statement ==");
// Discriminated union
type Square = {
    shape: "Square";
    side: number;
};
type Circle = {
    shape: "Circle";
    radius: number;
};

// type Shape = Square | Circle;

// // NOTE: I have to jump ahead and use a function here
// //       because discriminated union type guards don't seem to
// //       work outside of a function
// function caclArea(shapeObj: Shape): number {
//     // We want to calculate the area of this shape
//     let shapeArea: number;
//     switch (shapeObj.shape) {
//         case "Square":
//             shapeArea = shapeObj.side ** 2;
//             break;
//         case "Circle":
//             shapeArea = Math.PI * (shapeObj.radius ** 2);
//             break;
//     }
//     return shapeArea;
// }

let shapeObj: Shape = {
    shape: "Square",
    side: 2
}
console.log("Area of " + shapeObj.shape + " is: " + caclArea(shapeObj));
shapeObj = {
    shape: "Circle",
    radius: 1
}
console.log("Area of " + shapeObj.shape + " is: " + caclArea(shapeObj));



// Exception Handling
console.log("\n== Exception Handling ==");
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
type Rectangle = {
    shape: "Rectangle";
    length: number;
    breadth: number;
};

type Shape = Circle | Square | Rectangle

// NOTE: I have to jump ahead and use a function here
//       because discriminated union type guards don't seem to
//       work outside of a function
function caclArea(shapeObj: Shape): number {
    // We want to calculate the area of this shape
    let shapeArea: number;
    switch (shapeObj.shape) {
        case "Square":
            shapeArea = shapeObj.side ** 2;
            break;
        case "Circle":
            shapeArea = Math.PI * (shapeObj.radius ** 2);
            break;
        default:
            throw new Error("Area is not implemented for " + shapeObj.shape);
            break;   // Unnecessary in this case, but preferable for stylistic reasons
    }
    return shapeArea;
}

shapeObj = {
    shape: "Rectangle",
    length: 2,
    breadth: 4
};
// console.log("Area of " + shapeObj.shape + " is: " + caclArea(shapeObj));
try {
    console.log("Area of " + shapeObj.shape + " is: " + caclArea(shapeObj));
}
catch (e) {
    if (e instanceof Error) {
        console.log("ERROR: " + e.message);
    } else {
        console.log("UNKNOWN ERROR");
    }
}
finally {
    console.log("FINALLY is always invoked");
}


