import helpers from "../helpers/index.js";

const wordCountApp = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const resultWrap = document.querySelector(".result")

    const state = {
        word: "",
        numOfOccurences: null
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.word = obj.word
        state.numOfOccurences = obj.numOfOccurences

        render()
    }

    const listeners = () => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-z]/gi, "")
        })
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let word = input.value.toLowerCase()
            let numOfOccurences = word !== "" ? helpers.countWordsInTree(word) : null

            form.reset()
            setState({ word, numOfOccurences })
        })
    }

    const render = () => {
        if (state.word !== "" && state.numOfOccurences !== null) {
            resultWrap.classList.replace("hidden", "block")
            let resultElementsString = ""

            if (state.numOfOccurences === 0) {
                resultElementsString = `<p>The word <b>${state.word}</b> does not exist. Please enter a new word.</p>`
            } else if (state.numOfOccurences === 1) {
                resultElementsString = `<p>The word <b>${state.word}</b> appears <b class="text-blue">${state.numOfOccurences}</b> time.</p>`
            } else if (state.numOfOccurences > 1) {
                resultElementsString = `<p>The word <b>${state.word}</b> appears <b class="text-blue">${state.numOfOccurences}</b> times.</p>`
            }

            resultWrap.innerHTML = resultElementsString
        } else {
            resultWrap.classList.replace("block", "hidden")
            resultWrap.innerHTML = ""
        }
    }

    return {
        init
    }
})()

export default wordCountApp