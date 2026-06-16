// ============================================
// 1. OBJECT LITERAL SYNTAX - Interview Theory
// ============================================
// INTERVIEW QUESTIONS:
// Q1: What is Object Literal Syntax? Explain with advantages.
// A: Object literals { key: value } are the simplest, most readable way to create objects.
//    Advantages: No overhead, cleaner syntax, good for static/configuration objects,
//    supports nested structures and methods directly.
//
// Q2: When should we use Object Literals vs Constructors?
// A: Use Literals for: Single instances, configuration, one-time data structures.
//    Use Constructors for: Multiple instances with same structure (like Users, Products).
//
// Q3: Can Object Literals have methods?
// A: Yes! Methods can be defined directly. This is shorthand for storing functions as properties.
//    Example: { getName() { return this.name; } } is same as { getName: function() { ... } }
//
// INTERVIEW TIPS:
// - Mention readability and simplicity as key advantages
// - Know when to use for configuration (const CONFIG = { ... })
// - Explain that this refers to the object inside methods
// - Be ready to discuss Object.freeze() for immutability

// ============================================
// 1. OBJECT LITERAL SYNTAX - 30 Lines Code
// ============================================
// Type: Object created with literal notation { key: value }
// Real-time Example: E-commerce Product

const product = {
  // Basic Properties - Type: Primitives
  id: 12345,                              // Type: number
  name: "Premium Wireless Headphones",    // Type: string
  price: 199.99,                          // Type: number
  discount: 0.15,                         // Type: number (15%)
  inStock: true,                          // Type: boolean
  rating: 4.8,                            // Type: number
  
  // Complex Properties - Type: Arrays & Objects
  colors: ["black", "silver", "blue"],    // Type: Array<string>
  sizes: [32, 40, 48],                    // Type: Array<number>
  
  // Nested Object - Type: Object
  specs: {
    brand: "AudioMax",                    // Type: string
    model: "AM-500",                      // Type: string
    weight: 250,                          // Type: number (grams)
    warranty: 24                          // Type: number (months)
  },
  
  // Nested Array of Objects - Type: Array<Object>
  reviews: [
    { author: "John", rating: 5, text: "Excellent sound quality" },
    { author: "Sarah", rating: 4, text: "Good value for money" }
  ],
  
  // Methods - Type: Function
  calculateTotal(quantity) {
    return this.price * quantity * (1 - this.discount);
  },
  
  getDescription() {
    return `${this.name} by ${this.specs.brand} - $${this.price}`;
  }
};

console.log("Product Object Created:", product);


// ============================================
// 2. OBJECT CONSTRUCTOR - Interview Theory
// ============================================
// INTERVIEW QUESTIONS:
// Q1: What is a Constructor Function? How is it different from regular functions?
// A: Constructor functions create multiple object instances with shared structure.
//    Used with 'new' keyword. Naming convention: PascalCase. 'this' refers to new instance.
//    Regular functions don't create objects; constructors do via the 'new' operator.
//
// Q2: Explain the 'new' keyword. What happens when we use it?
// A: 'new' keyword does 4 things:
//    1. Creates empty object {}
//    2. Sets this = new object
//    3. Executes constructor function
//    4. Returns the object (unless explicitly returned)
//
// Q3: What's the difference between Constructor Functions and Classes (ES6)?
// A: Classes are syntactic sugar over constructor functions. Both achieve same result.
//    Classes: Better readability, built-in inheritance with extends, cleaner syntax.
//    Constructors: Older approach, still widely used in legacy code.
//
// Q4: Can constructor functions have methods?
// A: Yes! Methods are assigned to 'this'. Each instance gets its own copy of methods.
//    This uses more memory than prototype methods. Prototypes are more efficient.
//
// INTERVIEW TIPS:
// - Mention 'this' keyword and what it represents
// - Explain PascalCase naming convention
// - Be ready to discuss memory efficiency (methods on prototype vs instance)
// - Know about instanceof operator for type checking

// ============================================
// 2. OBJECT CONSTRUCTOR - 30 Lines Code
// ============================================
// Type: Objects created with constructor function using 'new' keyword
// Real-time Example: Database User Records

function User(firstName, lastName, email, role, joinDate) {
  // Properties assigned in constructor
  this.firstName = firstName;             // Type: string
  this.lastName = lastName;               // Type: string
  this.email = email;                     // Type: string
  this.role = role;                       // Type: string
  this.joinDate = new Date(joinDate);     // Type: Date
  this.isVerified = false;                // Type: boolean
  this.credits = 0;                       // Type: number
  
  // Methods in constructor
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  this.verifyEmail = function() {
    this.isVerified = true;
    console.log(`${this.email} verified!`);
  };
  
  this.addCredits = function(amount) {
    this.credits += amount;
    return `Added ${amount} credits. Total: ${this.credits}`;
  };
  
  this.displayProfile = function() {
    return {
      name: this.getFullName(),
      email: this.email,
      role: this.role,
      verified: this.isVerified,
      credits: this.credits
    };
  };
}

// Creating instances from constructor
const user1 = new User("John", "Developer", "john@tech.com", "admin", "2024-01-15");
const user2 = new User("Maria", "Designer", "maria@tech.com", "user", "2024-03-20");
const user3 = new User("Alex", "Manager", "alex@tech.com", "manager", "2024-02-10");

console.log("User1:", user1);
console.log("User2:", user2);


// ============================================
// 3. ACCESSING OBJECT PROPERTIES - Interview Theory
// ============================================
// INTERVIEW QUESTIONS:
// Q1: What are the different ways to access object properties in JavaScript?
// A: 1. Dot notation: obj.property (clean, readable, for known properties)
//    2. Bracket notation: obj["property"] (for dynamic/variable keys)
//    3. Nested access: obj.nested.property (accessing multi-level)
//    4. Destructuring: const { name, age } = obj (ES6 feature)
//
// Q2: When should we use bracket notation instead of dot notation?
// A: Bracket notation required for:
//    - Property names with spaces: obj["first name"]
//    - Property names with hyphens: obj["data-id"]
//    - Dynamic keys stored in variables: obj[variableName]
//    - Property names that are numbers: arr[0]
//
// Q3: What's the difference between accessing undefined vs non-existent properties?
// A: Both return undefined. Use 'in' operator or hasOwnProperty() to check existence.
//    'in' checks prototype chain; hasOwnProperty() only checks object itself.
//
// Q4: How do we safely access deeply nested properties?
// A: Use optional chaining (?.) in ES2020: obj?.nested?.property?.value
//    Falls back to undefined if any part is null/undefined. Prevents errors.
//
// Q5: What's the difference between property access and method calls?
// A: obj.prop returns the value. obj.method() calls the function.
//    Without parentheses on method, you get the function reference, not result.
//
// INTERVIEW TIPS:
// - Mention optional chaining and nullish coalescing (??)
// - Explain 'in' vs hasOwnProperty() difference
// - Know about Object.keys(), Object.values(), Object.entries()
// - Be ready to discuss performance (dot vs bracket notation is negligible)

// ============================================
// 3. ACCESSING OBJECT PROPERTIES - 30 Lines Code
// ============================================
// Type: Retrieving values from objects using different notations
// Real-time Example: Retrieving Config Settings

const config = {
  apiUrl: "https://api.example.com",      // Type: string
  timeout: 5000,                          // Type: number (milliseconds)
  retryAttempts: 3,                       // Type: number
  enableLogging: true,                    // Type: boolean
  environment: "production",              // Type: string
  
  database: {
    host: "db.example.com",               // Nested Type: string
    port: 5432,                           // Nested Type: number
    name: "maindb",                       // Nested Type: string
    ssl: true                             // Nested Type: boolean
  },
  
  features: ["authentication", "analytics", "notifications"] // Type: Array
};

// Method 1: Dot Notation - Direct property access
console.log(config.apiUrl);                    // Output: "https://api.example.com"
console.log(config.timeout);                   // Output: 5000
console.log(config.enableLogging);             // Output: true

// Method 2: Bracket Notation - String key access
console.log(config["environment"]);            // Output: "production"
console.log(config["retryAttempts"]);          // Output: 3

// Method 3: Nested Access - Accessing nested properties
console.log(config.database.host);             // Output: "db.example.com"
console.log(config.database["port"]);          // Output: 5432

// Method 4: Dynamic Access - Using variables as keys
const key1 = "apiUrl";
const key2 = "timeout";
console.log(config[key1]);                     // Output: "https://api.example.com"
console.log(config[key2]);                     // Output: 5000

// Method 5: Array Access within Object
console.log(config.features[0]);               // Output: "authentication"
console.log(config.features.length);           // Output: 3

// Method 6: Checking property existence
console.log("apiUrl" in config);               // Output: true
console.log("unknown" in config);              // Output: false

// Method 7: Default values with logical operators
const timeout = config.maxTimeout || 10000;    // Output: 10000 (fallback)


// ============================================
// 4. ACCESSING OBJECT METHODS - Interview Theory
// ============================================
// INTERVIEW QUESTIONS:
// Q1: What is 'this' keyword in object methods? What does it refer to?
// A: 'this' refers to the object that owns the method. When you call obj.method(),
//    'this' inside that method points to 'obj'. Context matters for 'this' binding.
//
// Q2: What happens if we call a method without parentheses?
// A: Method reference is returned (not executed). Example:
//    const fn = obj.method;  // fn is function reference
//    fn();                   // calling function (but 'this' context is lost)
//    obj.method();           // proper call with correct 'this'
//
// Q3: Explain method chaining. How does it work?
// A: Methods return 'this' to allow chaining: obj.method1().method2().method3()
//    Each method returns the object, allowing next method to be called on it.
//
// Q4: What's the difference between arrow functions and regular functions as methods?
// A: Arrow functions DON'T have their own 'this' - they inherit from parent scope.
//    Regular functions have their own 'this' - bound to the object at call time.
//    Use regular functions for methods, arrows for callbacks.
//
// Q5: How do you handle 'this' context issues?
// A: Solutions:
//    1. Use arrow functions (if allowed) - lexical this
//    2. Use .bind(): obj.method.bind(obj)
//    3. Use .call(): obj.method.call(obj)
//    4. Use .apply(): obj.method.apply(obj, args)
//    5. Store 'this' reference: const self = this;
//
// INTERVIEW TIPS:
// - Be able to explain 'this' binding clearly
// - Know about bind(), call(), apply() differences
// - Mention arrow functions vs regular functions for methods
// - Know about method overloading concepts
// - Discuss return values and method chaining patterns

// ============================================
// 4. ACCESSING OBJECT METHODS - 30 Lines Code
// ============================================
// Type: Calling functions stored in object properties
// Real-time Example: Banking Account Operations

const bankAccount = {
  accountNumber: "ACC-0001234",           // Type: string
  accountHolder: "Robert Wilson",         // Type: string
  balance: 5000,                          // Type: number
  transactionHistory: [],                 // Type: Array
  
  // Method 1: Simple calculation method
  checkBalance: function() {
    return `Current Balance: $${this.balance}`;
  },
  
  // Method 2: Modifying object state
  deposit: function(amount) {
    this.balance += amount;
    this.transactionHistory.push({
      type: "deposit",
      amount: amount,
      timestamp: new Date()
    });
    return `Deposited $${amount}. New Balance: $${this.balance}`;
  },
  
  // Method 3: Conditional logic method
  withdraw: function(amount) {
    if (amount > this.balance) {
      return "Insufficient funds!";
    }
    this.balance -= amount;
    this.transactionHistory.push({
      type: "withdrawal",
      amount: amount,
      timestamp: new Date()
    });
    return `Withdrawn $${amount}. New Balance: $${this.balance}`;
  },
  
  // Method 4: Complex processing method
  calculateInterest: function(rate) {
    const interest = this.balance * (rate / 100);
    return `Interest at ${rate}%: $${interest.toFixed(2)}`;
  },
  
  // Method 5: Returning object from method
  getStatement: function() {
    return {
      account: this.accountNumber,
      holder: this.accountHolder,
      balance: this.balance,
      transactions: this.transactionHistory.length
    };
  }
};

// Calling methods
console.log(bankAccount.checkBalance());           // Access method 1
console.log(bankAccount.deposit(500));             // Access method 2
console.log(bankAccount.withdraw(200));            // Access method 3
console.log(bankAccount.calculateInterest(2.5));   // Access method 4
console.log(bankAccount.getStatement());           // Access method 5


// ============================================
// 5. UPDATING OBJECT PROPERTIES - Interview Theory
// ============================================
// INTERVIEW QUESTIONS:
// Q1: Objects in JavaScript are mutable. Explain what this means.
// A: Objects are mutable = you can change properties after creation.
//    Unlike primitives (immutable), objects reference same data in memory.
//    Changes affect all references to that object.
//
// Q2: What's the difference between mutating and reassigning?
// A: Mutating: obj.prop = newValue (changes existing object)
//    Reassigning: obj = { } (points variable to new object)
//    Mutation affects all references; reassignment only changes that variable.
//
// Q3: How do you prevent object mutation?
// A: 1. Object.freeze() - prevents all changes (deep freeze needs recursion)
//    2. Object.seal() - allows property value changes, no add/delete
//    3. Spread operator: const newObj = { ...obj, prop: value }
//    4. Object.assign() - shallow copy method
//
// Q4: What's a shallow copy vs deep copy?
// A: Shallow copy: copies top level only. Nested objects still reference same memory.
//    Deep copy: copies everything recursively. Full independent copy.
//    Methods: shallow = {...obj} or Object.assign()
//           deep = JSON.parse(JSON.stringify()) or structuredClone()
//
// Q5: How do you bulk update multiple properties?
// A: Object.assign(target, source1, source2, ...)
//    Spread operator: { ...obj, prop1: value, prop2: value }
//    Both are shallow copies. Good for configuration merging.
//
// Q6: What happens when you delete a property?
// A: delete obj.property removes the property from object.
//    Property becomes undefined if accessed later.
//    Returns true (unless property is non-configurable).
//    For arrays, use splice() to maintain indices, or map() for new array.
//
// INTERVIEW TIPS:
// - Understand reference vs value for objects
// - Know Object.freeze(), Object.seal(), Object.preventExtensions()
// - Explain shallow vs deep copy clearly with examples
// - Mention immutability in React/Redux context
// - Be ready to discuss performance of different copy methods
// - Know when to use delete vs null vs undefined

// ============================================
// 5. UPDATING OBJECT PROPERTIES - 30 Lines Code
// ============================================
// Type: Modifying existing properties and adding new ones
// Real-time Example: User Profile Updates

const userProfile = {
  username: "alex_tech",                  // Type: string
  email: "alex@example.com",              // Type: string
  age: 28,                                // Type: number
  city: "New York",                       // Type: string
  joinedDate: "2023-01-15",               // Type: string
  subscriptionTier: "free",               // Type: string
  tags: ["developer", "freelancer"],      // Type: Array
  
  settings: {
    darkMode: true,                       // Nested Type: boolean
    notifications: true,                  // Nested Type: boolean
    language: "en"                        // Nested Type: string
  }
};

// Update 1: Modify existing string property
userProfile.email = "newemail@example.com";
console.log("Email Updated:", userProfile.email);

// Update 2: Modify existing number property
userProfile.age = 29;
console.log("Age Updated:", userProfile.age);

// Update 3: Modify existing boolean property
userProfile.subscriptionTier = "premium";
console.log("Tier Updated:", userProfile.subscriptionTier);

// Update 4: Add new property
userProfile.phone = "+1-555-0123";
console.log("Phone Added:", userProfile.phone);

// Update 5: Add new nested property
userProfile.premiumFeatures = {
  apiAccess: true,
  advancedAnalytics: true,
  supportPriority: "high"
};

// Update 6: Modify nested property
userProfile.settings.darkMode = false;
userProfile.settings.language = "es";
console.log("Settings Updated:", userProfile.settings);

// Update 7: Modify array - Add element
userProfile.tags.push("mentor");
console.log("Tags Updated:", userProfile.tags);

// Update 8: Modify array - Remove element
userProfile.tags.pop();
console.log("Tags After Removal:", userProfile.tags);

// Update 9: Bulk update multiple properties
Object.assign(userProfile, {
  city: "San Francisco",
  lastLogin: new Date(),
  activityStatus: "active"
});
console.log("Bulk Update Complete:", userProfile);

// Update 10: Delete property
delete userProfile.joinedDate;
console.log("Final Profile:", userProfile);
