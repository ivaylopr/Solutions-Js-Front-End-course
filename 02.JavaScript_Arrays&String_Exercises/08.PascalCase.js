function solution(text){
    const regex = /[A-Z]{1}[a-z]*/g;
    const matches = text.matchAll(regex);
    const output=[];
    for (const word of matches) {
        output.push(word);
    }
    console.log(output.join(', '));
}
