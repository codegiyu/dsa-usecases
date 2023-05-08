const frequenciesIntegerSort = (arr) => {
    const maxDigitLength = () => {
        let maxLength = 0
        for (let item of arr) {
            let length = Math.floor(Math.log10(item[1])) + 1
            maxLength = Math.max(maxLength, length)
        }

        return maxLength
    }

    const getDigit = (num, position) => {
        return Math.floor(num / Math.pow(10, position)) % 10
    }

    let iterationsLeft = maxDigitLength()
    let sortedArr = [...arr]

    for (let i = 0; i < iterationsLeft; i++) {
        let buckets = Array.from({length: 10}, () => [])
        for (let item of sortedArr) {
            let digit = getDigit(item[1], i)
            buckets[digit].push(item)
        }
        
        sortedArr = [...buckets[9], ...buckets[8], ...buckets[7], ...buckets[6], ...buckets[5], ...buckets[4],
                    ...buckets[3], ...buckets[2], ...buckets[1], ...buckets[0]]
    }

    return sortedArr
}
// console.log(frequenciesIntegerSort([["get", 5], ["of", 7], ["kin", 11], ["yes", 9], ["if", 2]]))
export default frequenciesIntegerSort