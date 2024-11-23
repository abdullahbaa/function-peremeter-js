/**
 * Return the sum of even numbers
 */

function evenNumbersOnly (numbers){
    const evens =[];
    for(const number of numbers){
        if (number % 2 ===0){
            console.log(numbers);
            evens.push(number);
        }

        // else {
        //     return true;
        // }
    }
    return evens;

}
const numbers =[3,5,6,88,9];
const evens =evenNumbersOnly(numbers);
console.log('Even Numbers Are', evens);


function sumOfEvenNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }

    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even numbers',sum);