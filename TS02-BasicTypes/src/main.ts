
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

// object
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
type myObjectType = {
    name: string,
    value: number,
    specialValue: 42
};