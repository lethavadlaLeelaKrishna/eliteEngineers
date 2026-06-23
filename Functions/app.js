// // ======================================================
// // FUNCTIONS IN JAVASCRIPT
// // ======================================================

// // Function:
// // A Function is a reusable block of code that performs a
// // specific task whenever it is called or invoked.

// // ======================================================
// // 1. FUNCTION DECLARATION
// // ======================================================

// // Definition:
// // A Function Declaration is a named function created using
// // the 'function' keyword. It can be called multiple times
// // whenever needed.

// function calculateBill(price, quantity) {
//     console.log(`Total Bill Amount: ₹${price * quantity}`);
// }

// calculateBill(500, 2);
// calculateBill(1000, 3);
// calculateBill(750, 4);


// // EX2
// function empDetails(empName){
//     console.log(`Employee Name: ${empName}`);
// }
// empDetails("Rakesh");


// // ======================================================
// // 2. FUNCTION EXPRESSION
// // ======================================================

// // Definition:
// // A Function Expression is a function stored inside a
// // variable. It can be used only after the variable is assigned.

// const showStudentResult = function(studentName, marks) {
//     console.log(`${studentName} scored ${marks} marks`);
// };

// showStudentResult("Rakesh", 85);

// const show = function studentResult1(studentName, marks) {
//     console.log(`${studentName} scored ${marks} marks`);
// };

// show();


// ======================================================
// 3. ARROW FUNCTION
// ======================================================

// Definition:
// An Arrow Function is a shorter way of writing functions.
// It is commonly used for simple operations and callbacks.

// const showOffer = () => {
//     console.log("Today's Offer: Flat 20% Discount");
// };

// showOffer();

// Real-time Example: E-commerce Order Processing
const orders = [
  { id: 1, product: "Laptop", price: 50000, quantity: 2 },
  { id: 2, product: "Phone", price: 30000, quantity: 1 },
  { id: 3, product: "Headphones", price: 5000, quantity: 3 }
];

// Calculate total for each order using arrow function
const orderTotals = orders.map(order => ({
  ...order,
  total: order.price * order.quantity
}));

console.log("Order Totals:", orderTotals);

// Filter orders with total > 50000
const highValueOrders = orders.filter(order => order.price * order.quantity > 50000);

console.log("High Value Orders:", highValueOrders);

// Another Real-time Example: Task Management System
const tasks = [
  { id: 1, title: "Write code", completed: true, priority: "high" },
  { id: 2, title: "Review PR", completed: false, priority: "medium" },
  { id: 3, title: "Update docs", completed: false, priority: "low" }
];

// Get only incomplete tasks using arrow function
const incompleteTasks = tasks.filter(task => !task.completed);
console.log("Incomplete Tasks:", incompleteTasks);

// Get task titles only using arrow function
const taskTitles = tasks.map(task => task.title);
console.log("Task Titles:", taskTitles);

// Check if all tasks are completed using arrow function
const allCompleted = tasks.every(task => task.completed);
console.log("All Tasks Completed:", allCompleted);

// // ======================================================
// // 4. FUNCTION WITH RETURN STATEMENT
// // ======================================================

// // Definition:
// // A function with a return statement sends a value back
// // to the place where the function was called.

// function calculateSalary(basicSalary) {
//     return basicSalary + 5000;
// }

// const finalSalary = calculateSalary(25000);

// console.log(`Final Salary: ₹${finalSalary}`);


// // ======================================================
// // 5. IIFE (Immediately Invoked Function Expression)
// // ======================================================

// // Definition:
// // An IIFE is a function that executes immediately after
// // it is created without needing a separate function call.

// (function(companyName) {
//     console.log(`Welcome to ${companyName}`);
// })("TechVerse");
// (function(empSal){
//     console.log(`Employee Salary: ${empSal}`);
// })(25000);


// // ======================================================
// // 6. FUNCTION WITH DEFAULT PARAMETERS
// // ======================================================

// // Definition:
// // Default Parameters allow a function to use a predefined
// // value when no argument is provided.

// function assignDepartment(department = "General Support") {
//     console.log(`Assigned Department: ${department}`);
// }

// assignDepartment();
// assignDepartment("Technical Support");


// // ======================================================
// // 7. CALLBACK FUNCTION
// // ======================================================

// // Definition:
// // A Callback Function is a function passed as an argument
// // to another function and executed later.

// function placeOrder(orderId, sendConfirmation) {
//     console.log(`Order ${orderId} placed successfully`);
//     sendConfirmation();
// }

// function sendConfirmation() {
//     console.log("Confirmation SMS Sent");
// }

// placeOrder("ORD101", sendConfirmation);