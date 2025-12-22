//Q1
// Ex1.1 - Yes or No
// Complete the method that takes a boolean value
//  and return a "Yes" string for true, 
// or a "No" string for false.

function isBoolean(bool) {
    return bool ? "yes" : "no";
}
console.log(isBoolean(true));
console.log(isBoolean(false));

//Q2
// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumLowest2Num(array) {
    array.sort((a, b) => a - b);
    return array[0] + array[1];
}
console.log(sumLowest2Num([500, 20, 3, 60]));

//Q3
// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// However, the arrays can have varying lengths, not just limited to 4.

function binary2decimal(array) {
    let str = array.join("");
    return parseInt(str, 2);
}
console.log(binary2decimal([0, 0, 1, 0, 1, 0]));

//Q4
// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(number) {
    let bool = Number.isInteger(Math.sqrt(number));
    if (bool) {
        return (Math.sqrt(number) + 1) ** 2;
    }
    else {
        return -1;
    }
}
console.log(findNextSquare(9));
console.log(findNextSquare(114));

//Q5
// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function summation(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation(5));
console.log(summation(8));
