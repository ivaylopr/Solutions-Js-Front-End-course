function solve(number){
    let evenSum = 0;
    let oddSum = 0;
    const numberArr = Array.from(String(number),Number);
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i]%2===0) {
            evenSum+=numberArr[i];
        } else{
            oddSum+=numberArr[i];
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
