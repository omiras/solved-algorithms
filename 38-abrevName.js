// URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:


// patrick feeney => P.F

function abbrevName(name) {
    var firstLetter = name
        .split(" ")
        .map(word => word[0])
        .join(".");

    return firstLetter;

};
console.log(abbrevName("Sam Harris"))
// console.log(abbrevName("Patrik Favuzzi"))
