import quickSort from "../helpers/quickSort.js"

let DICTIONARY_WORDS = [
    "lake", "hair", "year", "road", "tale", "food", "map", "ear", "poet", "hall", "sir", "menu", "son",
    "art", "exam", "city", "ad", "goal", "gene", "way", "math", "dirt", "loss", "debt", "dad", "mall", 
    "love", "fact", "town", "king", "oven", "song", "lady", "area", "mode", "girl", "gate", "bird",
    "poem", "mom", "news", "meat", "desk", "bath", "wife", "data", "wood", "unit", "idea", "lab"
]

DICTIONARY_WORDS = quickSort(DICTIONARY_WORDS)

const DICTIONARY = {}

for (let word of DICTIONARY_WORDS) {
    let firstLetter = word[0]
    if (Array.isArray(DICTIONARY[firstLetter])) {
        DICTIONARY[firstLetter].push(word)
    } else {
        DICTIONARY[firstLetter] = [word]
    }
}

export default DICTIONARY