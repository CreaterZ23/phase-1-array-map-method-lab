const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

// const titleCased = () => {
//     return tutorials.map(firstSplit => {
//       const eachLetter = firstSplit.split("");
//       const capEachLetter = eachLetter.map(capLetter => {
//         capLetter[0].toUpperCase() + capLetter.substring(1)
//       })
//     })
// }

const titleCased = () => {
    const arrOfWords = tutorials.map(sentences => {
        const tokens = sentences.split(" ");
        const capTokens = tokens.map(token => token.charAt(0).toUpperCase() + token.slice(1))
        return capTokens.join(" ")}
    )
    return arrOfWords;

}

// const titleCased = () => {
//         const fixTutorials = tutorials.map(function(eachTutorialStr)
//         {
//             eachTutorialStr.split("")
//             return fixTutorials;
//         })
//         return titleCased;
//         }