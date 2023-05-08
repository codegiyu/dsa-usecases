const checkWordMatch = (hashMap, word) => {
    let duplicateMap = {...hashMap}
    for (let char of word) {
        duplicateMap[char] = (duplicateMap[char] || 0) - 1

        if (duplicateMap[char] === 0) {
            delete duplicateMap[char]
        }

        if (duplicateMap[char] < 0) {
            return [hashMap, false]
        }
    }

    return [duplicateMap, true]
}

export default checkWordMatch