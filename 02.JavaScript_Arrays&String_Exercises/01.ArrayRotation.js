function solve(arr,times){
    const cutOffIdx = times%arr.length;

    const leftSide = arr.slice(0,cutOffIdx);
    const rightSide = arr.slice(cutOffIdx);

    const resultArr = rightSide.concat(leftSide);

    console.log(resultArr.join(' '));
    
}
