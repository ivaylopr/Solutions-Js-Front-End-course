function solve(text,word){
    const result = text.replaceAll(word,'*'.repeat(word.length));
    console.log(result);
}

solve("Ej goveda majka vi da eba!",'eba');
