const getWordFrequencies = (text) => {
    text = text.replace(/[^\w\-']/gi, " ")
    let wordsArr = text.split(" ")
    
    let frequencies = wordsArr.reduce((acc,curr) => {
        let key = curr.toLowerCase()

        acc[key] = (acc[key] || 0) + 1

        return acc
    }, {})
    
    delete frequencies[""]

    return Object.entries(frequencies) 
}

export default getWordFrequencies