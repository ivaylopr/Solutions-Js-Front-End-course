function wordTracker(input) {
    let words = input[0].split(' ');
    let firstTimes = 0;
    let secondTimes = 0;
    for (let i = 1; i < input.length; i++) {
        if (words[0] === input[i]) {
            firstTimes++;
        } else if (words[1] === input[i]) {
            secondTimes++;
        }
    }
    const times =
        [{ word: words[0], times: firstTimes },
         { word: words[1], times: secondTimes }]
            .sort((a, b) => b.times - a.times).forEach((x) => {
                console.log(`${x.word} - ${x.times}`);
            })

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
