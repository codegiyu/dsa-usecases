import { STAFF_RECORDS } from "../data/staffRecords.js";
import sortByAge from "../helpers/sortByAge.js";
import { sortByFirstName, sortByLastName } from "../helpers/sortByName.js";

const staffRecordsApp = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const tableBody = document.querySelector(".table-body")

    const staffData = STAFF_RECORDS.split("Age ")[1].split(" ").map(item => item.split(","))

    const state = {
        sortedStaffData: []
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.sortedStaffData = obj.sortedStaffData

        render()
    }

    const listeners = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let command = input.value

            if (command === "1") {
                let sortedStaffData = sortByFirstName(staffData)
    
                setState({ sortedStaffData })
            } else if (command === "2") {
                let sortedStaffData = sortByLastName(staffData)

                setState({ sortedStaffData })
            } else if (command === "3") {
                let sortedStaffData = sortByAge(staffData)

                setState({ sortedStaffData })
            }

            form.reset()
        })
    }

    const render = () => {
        tableBody.innerHTML = ""

        if (state.sortedStaffData.length) {
            // resultWrap.classList.replace("hidden", "block")

            for (let i = 0; i < state.sortedStaffData.length; i++) {
                const [firstName, lastName, age] = state.sortedStaffData[i]
                tableBody.innerHTML +=  `<tr class="table-body-row">
                                            <td >
                                                <p class="pl-1">${i + 1}</p>
                                            </td>
                                            <td >
                                                <p class="">${firstName}</p>
                                            </td>
                                            <td >
                                                <p >${lastName}</p>
                                            </td>
                                            <td >
                                                <p >${age}</p>
                                            </td>
                                        </tr>`
            }
        } else {
            // resultWrap.classList.replace("block", "hidden")
        }
    }

    return {
        init
    }
})()

export default staffRecordsApp