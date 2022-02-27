// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

// Single Line Comment
/*
 Multiline comment
 Can keep going
 */
/* Other stuff like JSDoc, XML documentation etc are 
 * are just imposing additional constraints on comments 
 * so another library can extract machine readable data
 * from comments.
*/

// If you are cloning the GitHub repo, don't forget to do npm install 
// after cloning / after each time you do npm run clean

// Literals
console.log("\n===== literals =====");
console.log(20);  // 20 is a numeric literal
console.log("Hello, World!");  // Hello, World! is a string literal
console.log(true); // true is a boolean literal

// constants and the const keyword
console.log("\n===== constants =====");
const x = 42;  // Literal types - type of x is not number, but "the number 42"
const y = true; // type of y is not boolean, but "the boolean value true"
// console.log(5 == 6);  // Because of literal types, this is a compile error

// variables & the let keyword
console.log("\n===== variables =====");
let i = 42;   // Now, type of i is number
let str = "Hello, World!"; // type of str is string
// typeof operator
console.log(typeof i);
console.log(typeof str);
// Variable name requirements
// * must start with letter, underscore, or dollar sign
// * can contain letters, underscores, dollar signs, or numbers
// * avoid conflicts with language and common identifiers
// There is also a var keyword.
// With var, you can redeclare the same variable multiple times
// with different scopes. 
var var1 = 43; // No checking for unused, as it could be in another module
var var1 = 18; // within same scope, must have same type
function varTestFunction(): void {
    // Different scope can have different type
    var var1 = true;
    console.log(typeof var1);
}
varTestFunction();          // prints boolean
console.log(typeof var1);   // prints number
// Recommendation: Do not use "var" keyword - this brings us back to JavaScript mess

// Boolean Type
console.log("\n===== boolean =====");
let myBool = true;
if (myBool) {
    console.log("The boolean was true");
}

// Special numbers NaN and Infinity
console.log("\n===== number =====");
console.log(10 / 0);
let myBigVal = Infinity;  // there is also -Infinity
console.log(myBigVal === (10 / 0));
console.log(Infinity * 0);
console.log(NaN === (Infinity / 0));
console.log(NaN === NaN);
// isFinite to check if value is not NaN and not +/- Infinity
console.log("\n===== isFinite checks =====");
console.log(isFinite(NaN));
console.log(isNaN(Infinity)); //false
console.log(isFinite(-Infinity));
// Hexadecimal numbers, exponent notation etc.
console.log("\n===== hex and exponent =====");
const numHex = 0x11;
console.log(numHex == 17);
console.log(1e3);  //1000 - integral exponents only

// strings
console.log("\n===== strings =====");
let str2 = 'Hello, World!';
let str3 = `Hello, World! X is ${x}`;
console.log(str3);
// Escape sequences
// \' \" \\ \n \t \x## (hex) 
console.log("Hello, World!\nHello, World!\rSad");
// \u#### (unicode hex) Ex: ഷ ("sha" in Malayalam)
console.log("\u0D37");
// strings are immutable in TypeScript / JavaScript
// Cannot change a character in place like in C++
// Replacing characters etc results in a new string

// regular expressions - are also types: RegExp
console.log("\n===== regular expressions =====");
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
let myExp = /^[+|-]?[0-9]+(.[0-9]+)?$/
console.log(myExp.test("+123.5"));
// Other special types with literals Ex. JSX

// function type
console.log("\n===== function type =====");
function add1(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add1(5, 3));
// This is same as
const add2 = function (num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add2(5, 3));
console.log(add1 === add2);
console.log(add1 == add2);
// function type is not just one type - different function types based on signatures
// Function return type
let addResult: ReturnType<typeof add2> = add2(10, 20);
console.log(typeof addResult);

// Union Types
console.log("\n===== union types =====");
let strOrBool: string | boolean = "string";
strOrBool = true;
let strOrBool2: string | boolean = "hello";
// console.log(strOrBool == strOrBool2); // compile error
function testStrOrBoolean(strOrBool: string | boolean, strOrBool2: string | boolean) {
    console.log(strOrBool == strOrBool2);  // Doesn't make any sense, but possible? 
}
testStrOrBoolean(strOrBool, strOrBool2);
// Also possible to do union of complex types
// But really - avoid it when possible
const add3 = (val1: number | string, val2: number | string): number | string => {
    if ((typeof val1 === "number") && (typeof val2 === "number")) {
        return val1 as number + val2 as number;
    } else if ((typeof val1 === "string") && (typeof val2 === "string")) {
        return val1 as string + val2 as string;
    } else {   // don't add this at first - show the return problem
        throw new Error("not implemented");
    }
}
/* The reason to use union types is because the underlying code is JavaScript. 
   So we just have to deal with code others wrote, which can return all kinds of stuff.
   But if you find yourself overusing union types, maybe your object modeling is rather off? 
   Example: 
     * a Salesman can sell you a Car or a House
     * Or, a Salesman can be base type for CarSalesman and RealEstateAgent
     *   CarSalesman can sell you a Car
     *   RealEstateAgent can sell you a House
   When you're overusing union types, your object model should be reconsidered.
 */

// never type
console.log("\n===== never type =====");
const add4 = (val1: number | string, val2: number | string): number | string | never => {
    if ((typeof val1 === "number") && (typeof val2 === "number")) {
        return val1 as number + val2 as number;
    } else if ((typeof val1 === "string") && (typeof val2 === "string")) {
        return val1 as string + val2 as string;
    } else {
        throw new Error("not implemented");  // never case
    }
}

// There is an intersection type (don't go there just yet?!)
console.log("\n===== intersection types =====");
// For composite types, intersection of two composite types has all properties of both types
// however, what is a string & boolean?
let stringAndBoolean: string & boolean;
// stringAndBoolean = true;  // No can't do
// stringAndBoolean = "hello";  // No can't do
// in fact, if you look at the inferred type, it is never!!
// Example of when you would use intersection types: Framework code
// * https://stackoverflow.com/a/61490811
// * https://github.com/Xample/ts-throwable/blob/master/src/index.ts 

// undefined type - value for uninitialized variables
console.log("\n===== undefined type =====");
let numUndefined: number | undefined;
console.log(numUndefined);
// Likewise, could use undefined in the add return type instead of throwing error to make compiler happy
const add5 = (val1: number | string, val2: number | string): number | string | undefined => {
    if ((typeof val1 === "number") && (typeof val2 === "number")) {
        return val1 as number + val2 as number;
    } else if ((typeof val1 === "string") && (typeof val2 === "string")) {
        return val1 as string + val2 as string;
    }
    return;
}

// void
console.log("\n===== void type =====");
const writeToConsole = function (message: string): void {
    console.log(message);
}
// could use undefined but void makes sense
// in general, undefined is for variables / values, void is for functions.
// you could still do
let result = writeToConsole("asdf");  // result gets type void; doesn't really make any sense.

// null value and null type
console.log("\n===== null type and null value =====");
// undefined is kinda the implicit null; null is the explicit null
// let param: string = null; // no can't do
let param: string | null = null;

// Nullable type
console.log("\n===== nullables =====");
const writeLine = function (message?: string) {
    if (message) {
        console.log(message + "\n");
    } else {
        console.log("\n");
    }
}
writeLine();  // write a blank line
writeLine("Good morning!"); // write a line of text
// union with null isn't the same as nullable
console.log("\n===== union with null isn't same as nullable =====");
function nullableTest(nullable1: string | null, nullable2?: string): void {
    console.log(nullable1);
    console.log(nullable2);
    console.log(nullable1 === nullable2);
}
nullableTest(null);
function nullableTest2(nullable1: string | undefined, nullable2?: string): void {
    console.log(nullable1);
    console.log(nullable2);
    console.log(nullable1 === nullable2);
}
nullableTest2(undefined);  // even then, one param has to be explicitly passed

// Javascript people will show tables of how types are 
// implicitly converted in mixed type expressions.
// The whole point of TypeScript is to not mess up types
// by doing that. So don't bother with the table too much.
// Rather, don't write mixed type expressions unnecessarily.
// If you need to convert
console.log("\n===== Type conversion =====");
// * to boolean, use !!
console.log(!!"false");  // this is true, not false, as all strings are true
// * to number, use parseInt or parseFloat
console.log(parseInt("45.2"));  // 45
console.log(parseFloat("456.2e-1"));  // 45.62
// * to string: everything has a toString() method
console.log(true.toString());

// Any and unknown types
console.log("\n===== any and unknown =====");
let anyVal: any = "Hello, World!";
let strFromAny: string = anyVal; // This works
let unknownVal: unknown = anyVal; // unknown can be assigned an any value
// let strFromUnknown: string = unknownVal; unknown cannot be assigned without type assertion

// Where the type is not obvious, use a type assertion or type check.
console.log("\n===== Type assertions and checks =====");
console.log((anyVal as string).length);  // style 1 - as keyword
console.log((<string>anyVal).length);    // style 2
let strFromUnknown: string = unknownVal as string;  // type assertion with unknown
console.log(strFromUnknown);
if (typeof anyVal === "string") {  // sometimes this is better
    // typescript understands the typeof check, and gives intellisense
    console.log(anyVal.length);
}
if (typeof unknownVal === "string") {  // same with unknown
    console.log(unknownVal.length);
}

// Type aliases
console.log("\n===== Type aliases =====");
// especially for functions - callback methods etc
// ReturnType<functionType> - useful to define variables?
type mattsBoolean = boolean;
let myBoolVal: mattsBoolean = true;
//if (typeof myBoolVal === "mattsBoolean") { } // Comparing to mattsBoolean fails
type addFunctionType = (val1: number, val2: number) => number;
let addAlias: addFunctionType = add1;
console.log(addAlias(4, 5));
addAlias = add2;  // Change the function
type addResultType = ReturnType<addFunctionType>;  // alias for result type
const addResult2: addResultType = addAlias(4, 5);
console.log(addResult2);

/* Aside: Comments in code!
 * I have copious comments above
 *  * Not just for you to understand
 *  * For me to understand when I look at this after 6 weeks
 * Keeping comments in sync as you update code
 *  * Matt has a complex piece of code with detailed comments
 *  * Newbie Jack comes along, changes something, but doesn't update comments!
 *  * Now, comments are out of sync with code - happens all the time in software companies
 *  * Unfortunately, Jack still gets paid - the nature of how things work
 * DON'T be Jack - sync your comments as you change the code!
 */

// Arrays
console.log("\n===== Arrays =====");
let myArray: number[];
// myArray[1] = 42; // used before initialized
myArray = [];
myArray[1] = 42;
myArray = new Array(4);  // length is optional, and just for initial storage reservation
for (let index = 1; index < 6; index++) {
    myArray[index] = index;
    // myArray[-index] = -index; // add later
    console.log(`Index ${index}: ${myArray[index]}`);
}
// length property
console.log(myArray.length); // 6 - because arrays in javaScript start at 0
myArray[-1] = -1;
// use -ve indices etc with caution! Weird behaviors!
// console.log(myArray.length); // add later
// console.log(myArray[-5]);
// map function
let doubleArray = myArray.map(val => val * 2);
console.log(doubleArray[4]); // expect 8
console.log(doubleArray[-1]); // map doesn't know about the negative indices
// push function
myArray.push(15);  // becomes index 6
console.log(myArray[6]);
myArray[20] = 20;
myArray.push(85);  // this becomes index 21, not index 7
console.log(myArray[7]);  // undefined
console.log(myArray[21]); // 85
// Array initializing
let myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2[1]); // logs 2
delete myArray2[1];
console.log(myArray2[1]); // undefined
// Array of union types
let myArray3 = [1, "a", 2, "b", "c", "d", true];  // avoid for readability!
// Array is a mutable type!
// instanceof operator
if (myArray instanceof Array) {
    console.log("myArray is an Array");
}
// Multi dimensional arrays
let myStrMatrix: string[][] = new Array();  // see lint error: Array literal notation is preferable
myStrMatrix[0] = new Array();  // add later - compile error without this
myStrMatrix[0][0] = 'x';
myStrMatrix[2] = new Array();  // add later - compile error without this
myStrMatrix[2][5] = 'a string';
// myStrMatrix[4][5][8] = "test";  // can't do because we created as 2-D

// Tuples
console.log("\n===== Tuples =====");
// Fixed length arrays with type constraints
type myTuple1 = [string, number];
let myTupleVal1: myTuple1 = ["a string", 18];
// let myTupleVal1: myTuple1 = ["a string", 18, "another string"]; // no can't do
// However, push() still works
myTupleVal1.push("another string");
console.log(myTupleVal1[0]);
console.log(myTupleVal1[1]);
// console.log(myTupleVal1[2]); // can't do this, even though we pushed
console.log(myTupleVal1.pop()); // this gives us the pushed value
// 3-tuple
const myThreeTuple: [string, number, boolean] = ["str", 42, true];

// Enumerations
console.log("\n===== Enumerations =====");
enum color {
    Violet,
    Indigo, // can give initial values
    Blue,
    Green,
    Yellow,
    Orange,
    Red
}
let myColor: color;
myColor = color.Red;
console.log(myColor);   // writes 6
enum color2 {
    Red = "Red",
    Green = "Yellow",
    // Blue - error: need value
    // But we can do:
    Blue = 3,
    Yellow  // then this becomes legal
}
const myColor2 = color2.Red;
console.log(myColor2);
// Iterating through enums
for (let oneColor in color2) {
    console.log(`${oneColor} is a color! Its value is ${color2[oneColor]}`);
}
// This also shows a weird thing about TypeScript compiling to JavaScript.
// Do not abuse this - becomes unreadable code!

// object
console.log("\n===== object =====");
const obj = { x: 42, y: 35 };
if ("x" in obj) {
    console.log("found");
}
// other kinds of indexers - use an enum based example
const obj2 = {
    [234]: "hello",
}
if (234 in obj2) {
    console.log(obj2[234]);
}

// Type alias for object
console.log("\n===== Type alias for object =====");
type myObjectType = {
    name: string,
    value: number,
    specialValue: 42
};
let myObj: myObjectType = {
    name: "it's name",
    value: 15,
    specialValue: 42
}
// myObj = { x: 42 };  // No can't do
// Do not abuse this - we will learn classes and interfaces later!

// Enum indexed properties
console.log("\n===== Enum indexed properties =====");
const messagesForColors = {
    [color2.Blue]: "I love your blue shirt!",
    [color2.Green]: "Green is my favorite color!",
    [color2.Red]: "The one color I can't stand is red.",
    [color2.Yellow]: "Yellow, yellow, dirty fellow!"
};
const greetByColor = function (choice: color2) {
    console.log(messagesForColors[choice]);
}
greetByColor(color2.Green);
// This is useful for some stuff like wiring up command arguments etc.

// Some native object types
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
console.log("\n===== Some native object types =====");
const today = new Date();
console.log(today);
// We already saw regular expressions
// We already saw arrays
// Similar title-case types for Number, Boolean, String - avoid!
const myMap = new Map();
myMap.set("stringKey", 42);
myMap.set(85, true);
// Add type constraint
const myDictionary = new Map<string, string>();
myDictionary.set("key1", "value1");
console.log(myDictionary.get("key1"));
