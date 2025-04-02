function solve(names){
    const sortedArr = names.sort((a, b)=>a.localeCompare(b));
    sortedArr.forEach((element,index) => {
        console.log(`${index+1}.${element}`);
        
    });
}
