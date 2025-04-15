function spell(input){
    const [mistiriusSpell,...commands] =input;

    const spell = commands.reduce((currentStateOfSpell,currentCommand)=>{
        if (currentCommand==='RemoveEven') {
            const result = currentStateOfSpell.split('').filter((_,index)=>
                index%2===0).join('');
            console.log(result);
            return result;
        }
        if (currentCommand.startsWith('TakePart!')) {
            const[,from,to]=currentCommand.split('!');
            const result = currentStateOfSpell.slice(Number(from),Number(to));
            console.log(result);
            return result;
        }
        if (currentCommand.startsWith('Reverse!')) {
            const [,substring]=currentCommand.split('!');
            if (!currentStateOfSpell.includes(substring)) {
                console.log('Error');
                return currentStateOfSpell;
            }
            const reversedValue = substring.split('').reverse().join('');
            const result = currentStateOfSpell.replace(substring,'').concat(reversedValue);
            console.log(result);
            return result;
        }
        return currentStateOfSpell;
    },mistiriusSpell); 
    console.log(`The concealed spell is: ${spell}`);
    
}

spell(["asAsl2adkda2mdaczsa", 
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
// ⦁	⦁	"TakePart!{from index}!{to index}":
// ⦁	Selects a portion of the spell specified by two numbers, unveiling a segment of its hidden power and then prints the spell.

// ⦁	"Reverse!{substring}":
// ⦁	If the spell contains the given substring, cut it out, reverse it and add it at the end of the spell. Then, print the updated spell.   
// ⦁	Otherwise, print "Error".
// ⦁	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
