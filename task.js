/* <h3>write a program to print the palindrome primes in the given range 1 to input
    input : 150  output : 2 3 5 7 11 101 131</h3> */

var num = prompt("Enter a number to print palindrome primes : ");
var result = "";
for (let i = 2; i <= num; i++) {
    var count = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
            break;
        }
    }
    if (count == 0 && i == i.toString().split("").reverse().join(""))
        result += i + " ";
}
console.log(`palindromic primes in the range of 1 to (${num}) is : ${result}`);
document.write(`<h3>palindromic primes in the range of 1 to (${num}) is : ${result}</h3><hr>`);

/*Write a program to find whether maximum number is found first or minimum number is found first.
Input: 123456789    output: min is found first max is found second */

var num = prompt("Enter numbers : ");
var min = 0;
var max = 0;
var minInd = 0;
var maxInd = 0;
for (let i of num) {
    if (num[i] < min) {
        min = num[i];
        minInd = i;
    }
    if (num[i] > max) {
        max = num[i];
        maxInd = i;
    }
}
// if (minInd < maxInd) {
//     console.log("min is found first max is found second");
// }
// else {
//     console.log("max is found first min is found second");
// }
var result = (minInd < maxInd) ? "Min is found first and max is found  second" : "Max is found first and min is found second";
console.log(`In the given input (${num}) ${result}`);
document.write(`<h3>In the given input (${num}) ${result}</h3><hr>`);

/*write a program for Calculating the difference between the sum of even and odd positions
input: Enter a number : 123     output: Difference : -2*/

var num = prompt("Enter a number range to print diff b/w sum of even & odd positions : ");
var oddSum = 0;
var evenSum = 0;
for (let i = 0; i < num.length; i++) {
    if (i % 2 == 0) {
        oddSum += Number(num[i]);
    }
    else {
        evenSum += Number(num[i]);

    }
}
console.log(`Difference b/w sum of even & odd positions in input (${num}) is : ${(evenSum - oddSum)}`);
document.write(`<h3>Difference b/w sum of even & odd positions in input (${num}) is : ${(evenSum - oddSum)}</h3><hr>`);

/*write a program to print the prime numbers, such the digits should be in increasing order in the given range1 to num (input).
input: enter a number : 150  output : 13 17 19 23 29 37 47 67 79 89 127 137 139 149*/

var num = prompt("Enter a number to print primes in increasing order: ");
var result = "";
for (let i = 2; i <= num; i++) {
    var count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            c++;
            break;
        }
    }
    if (count == 0) {
        var x = String(i);
        var greater = 0;
        if (x.length >= 2) {
            for (let k = 0; k < x.length - 1; k++) {
                if (x[k + 1] > x[k]) {
                    greater++;
                }
            }
            if (x.length - 1 == greater) {
                result += x + " ";
            }
        }
    }
}
console.log(`prime numbers in the increasing order from 1 to (${num}) is : ${result}`);
document.write(`<h3>prime numbers in the increasing order from 1 to (${num}) is : ${result}</h3><hr>`);