const sortByAge = (arr) => {
    const maxDigitLength = () => {
        let maxLength = 0
        for (let item of arr) {
            let length = Math.floor(Math.log10(item[2])) + 1
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
            let digit = getDigit(item[2], i)
            buckets[digit].push(item)
        }
        
        sortedArr = [].concat(...buckets)
    }

    return sortedArr
}
// console.log(sortByAge([["get", "bro", 5], ["of", "bro", 7], ["kin", "bro", 11], ["yes", "bro", 9], ["if", "bro", 2]]))
export default sortByAge