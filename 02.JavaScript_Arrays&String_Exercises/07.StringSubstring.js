function solve(specialWord, text){
    
    const match = text.split(' ').find((x)=>x.toLowerCase()===specialWord);
    console.log(match? specialWord : `${specialWord} not found!`);
}

solve('javascript','JavaScript is the best programming languag1');
