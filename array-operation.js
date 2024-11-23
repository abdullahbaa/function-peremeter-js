/**
 * Write a function to give me the sum of all numbers in an array
 */

function sumOfNumber(numbers){
    let sum =0;
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
        

    }
    return sum;


}
const nums = [33,44,55,66,77];
const sum = sumOfNumber(nums);
console.log('sum of the numbers', sum);