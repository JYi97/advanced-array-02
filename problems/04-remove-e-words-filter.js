/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
    // Your code here
    const sentenceArr = sentence.split(' ');
    // console.log(sentenceArr);
    const filteredSentence = sentenceArr.filter((word) => !word.includes('e') && !word.includes("E"));
    // console.log(filteredSentence);
    const filteredArr = filteredSentence.join(' ');
    // console.log(filteredArr);
    return filteredArr;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
