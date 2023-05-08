import checkWordMatch from "./checkWordMatch.js";
import DICTIONARY from "../data/dictionary.js";

console.log(DICTIONARY)
const checkAllWordsStartingWithALetter = (letterFrequencies, matchedWords, letter) => {
    console.log(letter)
    for (let word of DICTIONARY[letter]) {
        console.log(word)
        let [newFrequencies, isWordAMatch] = checkWordMatch(letterFrequencies, word)
        console.log(newFrequencies, isWordAMatch)
        letterFrequencies = newFrequencies
        matchedWords = isWordAMatch ? [...matchedWords, word] : matchedWords

        let frequencyMap = new Map(Object.entries(letterFrequencies))
        if (!frequencyMap.size) {
            return [letterFrequencies, matchedWords, false]
        }
    }

    return [letterFrequencies, matchedWords, true]
}

export default checkAllWordsStartingWithALetter