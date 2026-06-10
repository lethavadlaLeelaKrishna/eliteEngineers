// Operators :
// Operators are used to perform operations on variables and values. In JavaScript, there are several types of operators, including:

// Arithmetic Operators: +, -, *, /, %, **

    const num1 = "1000"; const num2 = '200'; const num3 = 200;

 
    console.log(
        `
            num1 + num2 = ${num3 + num1 + num2}
            num1 - num2 = ${num1 - num2}
            num1 * num2 = ${num1 * num2}
            num1 / num2 = ${num1 / num2}
            num1 % num2 = ${num1 % num2}
            num1 ** num2 = ${num1 ** num2}
        `
    );

// Assignment Operators: =, +=, -=, *=, /=, %=, **=

    let num4 = 500;

    num4 += 200;

    num4 -= 400;

    num4 *= 2;

    num4 /= 4;

    num4 %= 10;

    num4 **= 2;

    console.log(num4)

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

    const num5 = 100; const num6 = '100';

    console.log(
        `
            num5 > num6 : ${num5 > num6}
            num5 < num6 : ${num5 < num6}
            num5 >= num6 : ${num5 >= num6}
            num5 <= num6 : ${num5 <= num6}
            num5 == num6 : ${num5 == num6}
            num5 === num6 : ${num5 === num6}
            num5 != num6 : ${num5 != num6}
            num5 !== num6 : ${num5 !== num6}

        `
    )

// Logical Operators: &&, ||, !
 
// truth table

// A     B     A && B     A || B     !A
// 0     0      0           0           1
// 0     1      0           1           1
// 1     0      0           1           0
// 1     1      1           1           0


    const num7 = 10; const num8 = 20; const num9 = 30;

    console.log(
        `
            (num7 > num8) && (num7 > num9) : ${(num9 > num7 && num9 > num8) && (num7 > num8) && (num7 > num9)}
            (num7 > num8) || (num7 > num9) : ${(num7 > num8) || (num7 > num9) || true}
            !(num7 > num8) : ${!(num7 > num8)}
        `
    )
// Bitwise Operators: &, |, ^, ~, <<, >>, >>>

// Ternary Operator: condition ? expression1 : expression2 

// Type Operators: typeof

// Increment and Decrement Operators: ++, --

let x = 10;
let y =  x --;

console.log(`Value of x : ${x} and value of y : ${y}`);   