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

//Q6
// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

function century(year) {

    if (year % 100 == 0) {
        return year / 100;
    }
    else {
        return parseInt(year / 100) + 1;
    }
}
console.log(century(2000));
console.log(century(1601));
console.log(century(1));

// Q7
// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11

// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

function operationResult(op, num1, num2) {

    const operation = {
        "+": (num1, num2) => num1 + num2,
        "-": (num1, num2) => num1 - num2,
        "/": (num1, num2) => num1 / num2,
        "*": (num1, num2) => num1 * num2
    };
    return operation[op](num1, num2);
}
console.log(operationResult("-", 5, 4));

//Q8
// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// - the function nb_year should return n number of entire years needed to get a population
// greater or equal to p.
// - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your
// function: if the parameter percent is 2 you have to convert it to 0.02. 

function nbYear(p0, percent, aug, p) {
    let cnt = 0;
    while (p0 < p) {
        p0 = p0 + p0 * percent / 100 + aug;
        cnt++;
    }
    return cnt;
}
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500, 5, 100, 5000));

