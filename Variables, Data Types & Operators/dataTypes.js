/*
====================================================
                JAVASCRIPT DATA TYPES
====================================================

Definition:
Data Types define what kind of value is stored inside
a variable.

Examples:
Name        -> String
Age         -> Number
IsLoggedIn  -> Boolean
Products    -> Array
UserDetails -> Object

JavaScript Data Types are divided into:

1. Primitive Data Types
2. Non-Primitive Data Types
*/


/*
====================================================
            PRIMITIVE DATA TYPES
====================================================

Definition:
Primitive Data Types store a single value in a variable.

Key Points:
✅ Stores a single value
✅ Immutable
✅ Compared by value
✅ Does not use references

Types:
1. String
2. Number
3. Boolean
4. Null
5. Undefined
*/


/*
====================================================
                    STRING
====================================================

Definition:
String is used to store textual data.

Why?
Whenever we need to store names, addresses,
messages, emails, etc.

Represented With:
'', "", ``
*/

const firstName = "Galeti";

console.log(typeof firstName); // string
console.log(firstName);

// Another Example

const lastName = 'Krishna';

console.log(lastName);

// Template Literal

const fullName =
`My name is ${firstName} ${lastName}`;

console.log(fullName);

/*
Real-Time Example:
E-Commerce Product Name
*/

const productName = "iPhone 16";

console.log(productName);



/*
====================================================
                    NUMBER
====================================================

Definition:
Number is used to store numeric values.

Can Store:
✅ Integers
✅ Decimal Numbers
*/

const userPhoneNumber = 8123456789;
const userAge = 24;
const userPerformanceRating = 4.5;

console.log(typeof userAge); // number

/*
Real-Time Example:
Bank Account Balance
*/

const accountBalance = 50000;

console.log(accountBalance);



/*
====================================================
                    BOOLEAN
====================================================

Definition:
Boolean stores only two values.

true
false

Why?
Used for decision making.
*/

let isAuthenticated = true;
let isPrimeUser = false;

console.log(typeof isAuthenticated); // boolean

/*
Real-Time Example:
Netflix Login System
*/

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("Access Granted");
}



/*
====================================================
                    NULL
====================================================

Definition:
Null means intentionally empty.

Developer assigns null manually.
*/

let userLocation = null;

console.log(userLocation);

/*
Interview Question
*/

console.log(typeof null); // object

/*
Real-Time Example:
Food Delivery App
*/

let deliveryPartner = null;



/*
====================================================
                    UNDEFINED
====================================================

Definition:
Variable is declared but value is not assigned.
*/

let userAddress;

console.log(userAddress); // undefined
console.log(typeof userAddress);

/*
Real-Time Example:
Registration Form
*/

let middleName;



/*
====================================================
          NON-PRIMITIVE DATA TYPES
====================================================

Definition:
Non-Primitive Data Types store multiple values.

Key Points:
✅ Stores multiple values
✅ Mutable
✅ Compared by reference
✅ Uses memory references

Types:
1. Array
2. Object
*/


/*
====================================================
                    ARRAY
====================================================

Definition:
Array is used to store multiple values
inside a single variable.

Represented With:
[]
*/

const userNames = [
    "Galeti",
    "Krishna",
    "Reddy",
    "Sumanth"
];

console.log(userNames);

/*
Accessing Array Values
*/

console.log(userNames[0]); // Galeti
console.log(userNames[1]); // Krishna

/*
Array with Mixed Data Types
*/

const userDetails = [
    "Galeti Vamsi Krishna",
    24,
    8123456789,
    true,
    null
];

console.log(userDetails);

/*
Real-Time Example:
Shopping Cart
*/

const cartItems = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

console.log(cartItems);



/*
====================================================
                    OBJECT
====================================================

Definition:
Object stores data in key-value pairs.

Represented With:
{}
*/

const userInformation = {
    fullName: "Galeti Vamsi Krishna",
    age: 24,
    mobileNumber: 8123456789,
    isLoggedIn: true,
    location: null
};

console.log(userInformation);

/*
Accessing Object Properties
*/

console.log(userInformation.fullName);
console.log(userInformation.age);

/*
Real-Time Example:
Student Management System
*/

const student = {
    id: 101,
    name: "Vamsi",
    course: "MERN Stack"
};

console.log(student);



/*
====================================================
              ARRAY OF OBJECTS
====================================================

Definition:
Array of Objects is a collection of multiple objects.

Most commonly used data structure in
ReactJS, NodeJS, APIs, Databases, etc.

Represented With:
[
   {},
   {},
   {}
]
*/

const employees = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Software Engineer",
        department: "Engineering",
        salary: 75000,
        isActive: true,
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        id: 2,
        name: "Priya Reddy",
        role: "UI/UX Designer",
        department: "Design",
        salary: 68000,
        isActive: true
    },
    {
        id: 3,
        name: "Rahul Verma",
        role: "Project Manager",
        department: "Management",
        salary: 90000,
        isActive: false
    },
    {
        id: 4,
        name: "Sneha Patel",
        role: "QA Engineer",
        department: "Quality Assurance",
        salary: 62000,
        isActive: true
    }
];

/*
Accessing Data
*/

console.log(employees[0].name);

console.log(employees[0].skills[1]);

console.log(employees[2].role);

/*
Real-Time Example:
Employee Management System
Amazon Products
Student Records
Hospital Management
Banking Applications
*/


/*
====================================================
                QUICK REVISION
====================================================

String      -> Text Data
Number      -> Numeric Data
Boolean     -> true / false
Null        -> Empty Value
Undefined   -> Value Not Assigned
Array       -> Multiple Values
Object      -> Key-Value Pairs
ArrayObject -> Multiple Records

====================================================
                INTERVIEW POINT
====================================================

Primitive Data Types:
String
Number
Boolean
Null
Undefined

Non-Primitive Data Types:
Array
Object

Most APIs return:
Array of Objects

====================================================
*/