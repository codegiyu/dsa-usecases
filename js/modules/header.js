
const headerControl = (() => {
    const menu = document.querySelector(".menu")
    const mainMenu = document.querySelector(".main-menu")
    const menuBtn = document.querySelector(".menu-btn")
    const menuCloseBtn = document.querySelector(".menu-close-btn")

    const state = {
        menuIsOpen: false
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.menuIsOpen = obj.menuIsOpen

        render()
    }

    const listeners = () => {
        menuBtn.addEventListener("click", () => setState({ menuIsOpen: true }))
        menuCloseBtn.addEventListener("click", () => setState({ menuIsOpen: false }))
        menu.addEventListener("click", (e) => {
            if (!mainMenu.contains(e.target)) {
                setState({ menuIsOpen: false })
            }
        })
    }

    function render() {
        menu.dataset.status = state.menuIsOpen ? "active" : ""
    }

    return {
        init
    }
})()

export default headerControl