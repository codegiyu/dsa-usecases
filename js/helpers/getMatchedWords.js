import DICTIONARY from "../data/dictionary.js";
import checkAllWordsStartingWithALetter from "./checkAllWordsStartingWithALetter.js";

const getMatchedWords = (string) => {
    let matchedWords = [], letterFrequencies = {}, leftOverLetters = ""

    for (let char of string) {
        letterFrequencies[char] = (letterFrequencies[char] || 0) + 1
    }
    // console.log(letterFrequencies)
    for (let key in DICTIONARY) {
        if (letterFrequencies[key]) {
            let [newFrequencies, newMatchedWords, canKeepChecking] = checkAllWordsStartingWithALetter(letterFrequencies, matchedWords, key)
            // console.log(newFrequencies, newMatchedWords, canKeepChecking)
            letterFrequencies = newFrequencies
            matchedWords = newMatchedWords

            if (!canKeepChecking) {
                break
            }
        }
    }

    for (let char in letterFrequencies) {
        leftOverLetters += char.repeat(letterFrequencies[char])
    }

    return {
        matchedWords,
        leftOverLetters
    }
}

export default getMatchedWords