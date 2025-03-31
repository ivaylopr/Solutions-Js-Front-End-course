function countWord(text,word){
    let words = text.split(' ');
    let counter = 0;
    words.forEach(element => {
        if (element===word) {
            counter++;
        }
    });
    console.log(counter);
    
}
