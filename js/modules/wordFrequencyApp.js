import frequenciesIntegerSort from "../helpers/frequenciesIntegerSort.js"
import getWordFrequencies from "../helpers/getWordFrequencies.js"

const wordFrequencyCounter = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const resultWrap = document.querySelector(".result")

    const state = {
        sortedFrequencies: []
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.sortedFrequencies = obj.sortedFrequencies

        render()
    }

    const listeners = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let text = input.value

            if (text.length) {
                let frequencies = getWordFrequencies(text)
                let sortedFrequencies = frequenciesIntegerSort(frequencies)
    
                form.reset()
                setState({ sortedFrequencies })
            } else {
                setState({ sortedFrequencies: [] })
            }
        })
    }

    const render = () => {
        if (state.sortedFrequencies.length) {
            resultWrap.classList.replace("hidden", "block")
            resultWrap.innerHTML = ""

            for (let [word, frequency] of state.sortedFrequencies) {
                let displayString = `<div class="w-full flex items-center justify-between py-1 px-5 text-base text-dark">
                                        <p class="text-lg">${word}</p>
                                        <div class="w-[2.25rem] aspect-square bg-blue text-white rounded grid place-items-center">
                                            <span class="leading-[2.25rem]">${frequency}</span>
                                        </div>
                                    </div>`

                resultWrap.innerHTML += displayString
            }
        } else {
            resultWrap.classList.replace("block", "hidden")
            resultWrap.innerHTML = ""
        }
    }

    return {
        init
    }
})()

export default wordFrequencyCounter