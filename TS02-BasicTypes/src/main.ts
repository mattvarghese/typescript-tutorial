
// Single Line Comment
/*
 Multiline comment
 Can keep going
 */

// If you are cloning the GitHub repo, don't forget to do npm install 
// after cloning / after each time you do npm run clean

// Literals
console.log("\n===== literals =====");
console.log(20);  // 20 is a numeric literal
console.log("Hello, World!");  // Hello, World! is a string literal
console.log(true); // true is a boolean literal

// constants
console.log("\n===== constants =====");
const x = 42;  // Literal types - type of x is not number, but "the number 42"
const y = true; // type of y is not boolean, but "the boolean value true"
// console.log(5 == 6);  // Because of literal types, this is a compile error

// variables
console.log("\n===== variables =====");
let i = 42;   // Now, type of i is number
let str = "Hello, World!"; // type of str is string
// typeof operator
console.log(typeof i);
console.log(typeof str);

// Special numbers NaN and Infinity
console.log("\n===== NaN and Infinity =====");
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
    } else {
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
// infact, if you look at the inferred type, it is never!!

// undefined type - value for uninitialized variables
console.log("\n===== undefined type =====");
let numUndefined: number | undefined;
console.log(numUndefined); 
// Likewise, could use undefined in the add return type instead of throwing erro to make compiler happy
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
// by doing that. So don't bother with the table. Rather
// don't write mixed type expressions unnecessarily.
// Where the type is not obvious, use a type assertion.

// Type aliases
// especially for functions - callback methods etc
// ReturnType<functionType> - useful to define variables?

// object
const obj = { x: 42, y: 35 };
if ("x" in obj) {
    console.log("found");
}
// other kinds of indexers - use an enum based example
const obj2 = {
    [234]: "hello",
}
console.log(obj2[234]);