/*
========================================
            VARIABLES IN JAVASCRIPT
========================================

Definition:
Variables are storage containers used to store data or information
that can be used later in a program.

Real-Time Example:
Think of a variable as a labeled box.

Name Box       → "Vamsi"
Age Box        → 25
Salary Box     → 50000

You can store, update, and access the values whenever required.
*/


/*
========================================
        HOW TO CREATE VARIABLES
========================================

JavaScript provides three keywords:

1. var   → ES5 (Old Version)
2. let   → ES6 (Modern Version)
3. const → ES6 (Modern Version)
*/


/*
========================================
            DECLARATION
========================================

Declaration means creating a variable without assigning a value.
*/

let userName;

// console.log(userName); // Output: undefined


/*
========================================
            INITIALIZATION
========================================

Initialization means assigning a value to a variable
for the first time.
*/

userName = "Galeti Vamsee Krishna";

// console.log(userName);


/*
========================================
         RE-INITIALIZATION
========================================

Updating or changing the existing value of a variable.
*/

userName = "G Vamsi Krishna";

// console.log(userName);


/*
========================================
          RE-DECLARATION
========================================

Creating a variable again with the same name.

let and const DO NOT allow redeclaration.
var allows redeclaration.
*/

// ❌ Error
// let userName = "Vamsi Krishna";

// ✅ Allowed
var city = "Hyderabad";
console.log(city); 
var city = "Bangalore";

console.log(city); // Bangalore


/*
========================================
        VAR vs LET vs CONST
========================================

---------------------------------------------------------
Keyword     Redeclare   Reassign   Scope
---------------------------------------------------------
var         ✅ Yes      ✅ Yes     Function Scope
let         ❌ No       ✅ Yes     Block Scope
const       ❌ No       ❌ No      Block Scope
---------------------------------------------------------
*/


/*
========================================
            VAR EXAMPLE
========================================
*/

var studentName = "Rahul";

studentName = "Kiran"; // Reassignment Allowed

var studentName = "Vamsi"; // Redeclaration Allowed

console.log(studentName);


/*
========================================
            LET EXAMPLE
========================================
*/

let courseName = "JavaScript";

courseName = "React JS"; // Reassignment Allowed

// let courseName = "Node JS"; // ❌ Error

console.log(courseName);


/*
========================================
            CONST EXAMPLE
========================================
*/

const companyName = "Google";

// companyName = "Microsoft"; // ❌ Error

console.log(companyName);


/*
========================================
        COMMON MISTAKE
========================================
*/

// ❌ Incorrect

const userMobileNumber = 1234567890;

mobileNumber = 1234567890;

// Here "mobileNumber" is a different variable.
// It was never declared properly.

// ✅ Correct

const mobileNumber = 1234567890;

console.log(mobileNumber);


/*
========================================
        VARIABLE NAMING RULES
========================================

1. Variable names can contain:
   - Letters (a-z, A-Z)
   - Numbers (0-9)
   - Underscore (_)
   - Dollar Sign ($)

2. Variable names cannot start with a number.

3. Variable names cannot contain spaces.

4. Variable names are case-sensitive.

5. Avoid JavaScript reserved keywords.

*/


/*
========================================
    VALID VARIABLE NAMES
========================================
*/

let firstName;
let userAge;
let employee_salary;
let $amount;
let course1;


/*
========================================
    INVALID VARIABLE NAMES
========================================
*/

// let 123name;
// let user name;
// let let;
// let class;


/*
========================================
    VARIABLE NAMING CONVENTIONS
========================================

1. camelCase     ✅ Recommended
2. PascalCase
3. snake_case
4. UPPER_CASE (Constants)
*/


// camelCase
let studentName = "Vamsi";

// PascalCase
let StudentName = "Vamsi";

// snake_case
let student_name = "Vamsi";

// UPPER_CASE
const MAX_USERS = 100;


/*
========================================
        REAL-TIME EXAMPLE
========================================
*/

let customerName = "Ravi";
let productName = "iPhone 16";
let productPrice = 79999;
let quantity = 2;

let totalAmount = productPrice * quantity;

console.log("Customer :", customerName);
console.log("Product :", productName);
console.log("Quantity :", quantity);
console.log("Total Amount :", totalAmount);


/*
========================================
            KEY POINTS
========================================

✅ Variables store data.

✅ let is the most commonly used keyword.

✅ const is used when the value should not change.

✅ var is an older keyword and generally avoided
   in modern JavaScript development.

✅ Follow camelCase naming convention.

✅ Use meaningful variable names.

========================================
*/