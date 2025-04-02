function solve(specialWords,text){
   const words = specialWords.split(', ');
   let result = text;
   words.forEach((word) => {
    const searchedValue = '*'.repeat(word.length)
    result = result.replace(searchedValue,word);
   });
   console.log(result);
}

solve('great, learning','softuni is ***** place for ******** new programming languages');
