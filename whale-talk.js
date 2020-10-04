// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
// There are a few simple rules for translating text to whale language:
// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

let words = 'muhammad nabiku';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [''];
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (words[i] === vowels[j]) {
      if (words[i] === 'e' || words[i] === 'u') {
        resultArray.push(words[i] + words[i]);
      } else {
        resultArray.push(words[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());