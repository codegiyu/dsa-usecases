const accordionControl = (() => {
    const accordionsParent = document.querySelector(".accordions-group")
    const accordionList = document.querySelectorAll(".accordion")
    const accordionHeaders = document.querySelectorAll(".accordion-header")
    const initialAccordionState = {}

    for (let accordion of accordionList) {
        initialAccordionState[accordion.dataset.question] = false
    }

    const state = {
        accordionIsOpen: initialAccordionState
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.accordionIsOpen = obj.accordionIsOpen

        render()
    }

    const listeners = () => {
        for (let header of accordionHeaders) {
            header.addEventListener("click", (e) => {
                let key = e.currentTarget.dataset.question
                let currentStatus = !!e.currentTarget.dataset.status
                
                setState({ accordionIsOpen: { ...state.accordionIsOpen, [key]: !currentStatus } })
            })
        }
    }

    function render() {
        for (let key in state.accordionIsOpen) {
            let accordion = accordionsParent.querySelector(`[data-question=${key}]`)
            
            accordion.querySelector(".accordion-header").dataset.status = state.accordionIsOpen[key] ? "active" : ""
        }
    }

    return {
        init
    }
})()

export default accordionControl