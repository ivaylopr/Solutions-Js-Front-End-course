function solve(text) {
    const regex = /#[A-Za-z]+/gm;
    const matches = text.matchAll(regex);
    for (const word of matches) {
        console.log(word[0].substring(1));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');

