function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const number of arr) {
        if (number % 2 === 0) {
            evenSum += number
        } else {
            oddSum += number;
        }
    }
const result = evenSum - oddSum;
console.log(result);
    
}
