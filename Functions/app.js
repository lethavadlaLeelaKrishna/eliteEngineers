// ======================================================
// FUNCTIONS IN JAVASCRIPT
// ======================================================

// Function:
// A Function is a reusable block of code that performs a
// specific task whenever it is called or invoked.

// ======================================================
// 1. FUNCTION DECLARATION
// ======================================================

// Definition:
// A Function Declaration is a named function created using
// the 'function' keyword. It can be called multiple times
// whenever needed.

function calculateBill(price, quantity) {
    console.log(`Total Bill Amount: ₹${price * quantity}`);
}

calculateBill(500, 2);
calculateBill(1000, 3);
calculateBill(750, 4);


// ======================================================
// 2. FUNCTION EXPRESSION
// ======================================================

// Definition:
// A Function Expression is a function stored inside a
// variable. It can be used only after the variable is assigned.

const showStudentResult = function(studentName, marks) {
    console.log(`${studentName} scored ${marks} marks`);
};

showStudentResult("Rakesh", 85);


// ======================================================
// 3. ARROW FUNCTION
// ======================================================

// Definition:
// An Arrow Function is a shorter way of writing functions.
// It is commonly used for simple operations and callbacks.

const showOffer = () => {
    console.log("Today's Offer: Flat 20% Discount");
};

showOffer();


// ======================================================
// 4. FUNCTION WITH RETURN STATEMENT
// ======================================================

// Definition:
// A function with a return statement sends a value back
// to the place where the function was called.

function calculateSalary(basicSalary) {
    return basicSalary + 5000;
}

const finalSalary = calculateSalary(25000);

console.log(`Final Salary: ₹${finalSalary}`);


// ======================================================
// 5. IIFE (Immediately Invoked Function Expression)
// ======================================================

// Definition:
// An IIFE is a function that executes immediately after
// it is created without needing a separate function call.

(function(companyName) {
    console.log(`Welcome to ${companyName}`);
})("TechVerse");


// ======================================================
// 6. FUNCTION WITH DEFAULT PARAMETERS
// ======================================================

// Definition:
// Default Parameters allow a function to use a predefined
// value when no argument is provided.

function assignDepartment(department = "General Support") {
    console.log(`Assigned Department: ${department}`);
}

assignDepartment();
assignDepartment("Technical Support");


// ======================================================
// 7. CALLBACK FUNCTION
// ======================================================

// Definition:
// A Callback Function is a function passed as an argument
// to another function and executed later.

function placeOrder(orderId, sendConfirmation) {
    console.log(`Order ${orderId} placed successfully`);
    sendConfirmation();
}

function sendConfirmation() {
    console.log("Confirmation SMS Sent");
}

placeOrder("ORD101", sendConfirmation);