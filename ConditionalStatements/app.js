// Conditional Statements :
// CS are used to perform different actions based on different conditions.
// CS works on the basis of true or false.


// if statement :
// if statement is used to execute a block of code if a specified condition is true.


    // if(condition){
    //     // Code to be executed
    // }



// if else statement :

    // if(condition){
    //     // code to be executed when the condition returns true
    // }else{
    //     // code to be executed when the condition returns false
    // }

// ternary operator :
// The ternary operator is a shorthand way of writing an if-else statement.


    // Syntax : condition ? true block code : false block code


// else if statement :

    // if(condition1){
    //     // code to be executed if the condition1 is true
    // }else if(condition2){
    //     // code to be executed if the condition2 is true
    // }else if(condition3){
    //     // code to be executed if the condition3 is true
    // }else{
    //     // code to be executed if all the above conditions fails
    // }

// switch statement :

    // const userDesignation = "Manager";


    // switch(userDesignation){

    //     case "Manager":
    //         // code to be executed when the expression matches value1
    //         console.log("Welcome Manager");
    //         break;

    //     case "Developer":
    //         // code to be executed when the expression matches value2
    //         console.log("Welcome Developer");
    //         break;

    //     case "Designer":
    //         // code to be executed when the expression matches value3
    //         console.log("Welcome Designer");
    //         break;

    //     default:
    //         // code to be executed when the expression doesn't match any of the above values
    //         console.log("Welcome User");
    // }

// nested Conditional statements :


    // const userRole = "Admin";
    // const userStatus = "Active";

    // if(userRole === "Admin"){
    //     if(userStatus === "Active"){
    //         console.log("Welcome Admin");
    //     }else{
    //         console.log("Your account is not active");
    //     }
    // }else{
    //     console.log("Welcome User");
    // }



if (true && true && false) {

    console.log("Entered first nested block");

    if (true || false || false) {

        console.log("Inside first nested if block");

    } else {

        console.log("Inside first nested else block");

        if ((true && false) || true) {

            console.log("Inside second-level nested if block");

            if ((false || true) && true) {

                console.log("Inside third-level nested if block");

            } else {

                console.log("Inside third-level nested else block");
            }

        } else {

            console.log("Inside second-level nested else block");
        }
    }

} else {

    console.log("Entered outer else block");

    if (true || (false && true)) {

        console.log("Inside outer else -> nested if block");

        if ((true && true) || false) {

            console.log("Inside deeper nested if block");

            if ((false && false) || (true && true)) {

                console.log("Inside deepest nested if block");

            } else {

                console.log("Inside deepest nested else block");
            }

        } else {

            console.log("Inside deeper nested else block");
        }

    } else {

        console.log("Inside outer else -> nested else block");

        if ((true && false) || true) {

            console.log("Inside second nested if block");

            if (true && (false || true)) {

                console.log("Inside third nested if block");

            } else {

                console.log("Inside third nested else block");
            }

        } else {

            console.log("Inside second nested else block");

            if (false || (true && false)) {

                console.log("Inside final nested if block");

            } else {

                console.log("Inside final nested else block");
            }
        }
    }
}

