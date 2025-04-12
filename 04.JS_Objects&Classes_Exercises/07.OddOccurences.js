function oddOccurrences(input) {
    const occurrences=input.split(' ').reduce((acc, curr) => {
        const key = curr.toLowerCase();
        if (!acc.hasOwnProperty(key)) {
            acc[key] = 0
        }
        acc[key]++;
        return acc;
    }, {});
    console.log(Object.keys(occurrences).filter((key)=>occurrences[key]%2!==0).sort((a, b) => b.localeCompare(a)).join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
