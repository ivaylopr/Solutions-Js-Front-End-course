function solve(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const result = new Array(sortedArr.length).fill(0).map((_, index)=>{
        const isEven = index%2===0;
        const smallNumberIdx = index/2;
        const bigNumberIdx = sortedArr.length- Math.ceil(index/2);

        return  isEven ? sortedArr[smallNumberIdx] : sortedArr[bigNumberIdx];
    });
    
    return result;
    
}
solve([1,65,3,52,48,63,31,-3,18,56])
