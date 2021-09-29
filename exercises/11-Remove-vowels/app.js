
const rapid = (myString) => {
    let consonants = [];
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter)
    }
    const consonantsStr = consonants.join('');
    const consonantsUpper = consonantsStr.toUpperCase();
    return consonantsUpper
    // return consonants.join('').toUpperCase();
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));