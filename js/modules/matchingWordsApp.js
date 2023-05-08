import helpers from "../helpers/index.js"

const matchingWordsApp = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const resultWrap = document.querySelector(".result")

    const state = {
        resultString: ""
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.resultString = obj.resultString

        render()
    }

    const listeners = () => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-z]/gi, "")
        })
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let word = input.value.toLowerCase()
            const {matchedWords, leftOverLetters} = helpers.getMatchedWords(word)
            // console.log(word, matchedWords, leftOverLetters)
            let matchedWordsHalf = "", leftOversHalf = ""

            if (matchedWords.length < 1) {
                matchedWordsHalf = "There are no matching words"
            } else if (matchedWords.length === 1) {
                matchedWordsHalf = "The matching word is "
            } else {
                matchedWordsHalf = "The matching words are "
            }

            if (leftOverLetters.length < 1) {
                leftOversHalf = "There are no unused letters"
            } else if (leftOverLetters.length === 1) {
                leftOversHalf = "The unused letter is "
            } else {
                leftOversHalf = "The unused letters are "
            }

            let resultString = `${matchedWordsHalf}<b>${JSON.stringify(matchedWords)}</b>. ${leftOversHalf}<b>"${leftOverLetters}"</b>.`
            resultString = resultString.replace(/(""|\[\])/, "")

            form.reset()
            setState({ resultString })
        })
    }

    const render = () => {
        if (state.resultString !== "") {
            resultWrap.classList.replace("hidden", "block")
            resultWrap.innerHTML = state.resultString
        } else {
            resultWrap.classList.replace("block", "hidden")
            resultWrap.innerHTML = ""
        }
    }

    return {
        init
    }
})()

export default matchingWordsApp