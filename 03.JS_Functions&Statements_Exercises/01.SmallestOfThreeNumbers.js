function solve(first, second, third) {
    const numbers = [first, second, third].sort((a, b) => a - b);
    const smallest = numbers.shift();
    console.log(smallest);
}

//(first,second,third)=>console.log(Math.min(first,second,third));

solve(2, 5, 3)
