import { CUSTOMER_ACCOUNT_INFORMATION, CUSTOMER_ACCOUNT_TRANSACTIONS } from "../data/bankInfo.js";

const ussdController = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const resultWrap = document.querySelector(".result")
    const inputLabel = document.querySelector(".input-label")

    let accountData = CUSTOMER_ACCOUNT_INFORMATION.split("Phone Number ")[1].split(" ").map(item => item.split(","))
    let transactionData = CUSTOMER_ACCOUNT_TRANSACTIONS.split("/Debit ")[1].split(" ").map(item => item.split(","))

    const initialBankData = {}
    const MAX_RECENT_TRANSACTIONS_LENGTH = 3

    for (let [firstName, lastName, accountNumber, phone] of accountData) {
        initialBankData[accountNumber] = {
            firstName,
            lastName,
            accountNumber,
            phone,
            transactions: {
                credit: [],
                debit: [],
                totalCredit: 0,
                totalDebit: 0,
                recentTransactions: []
            }
        }
    }

    for (let [sn, account, amount, type] of transactionData) {
        amount = Number(amount)
        if (type === "Credit") {
            initialBankData[account].transactions.totalCredit += amount
            initialBankData[account].transactions.credit.push(amount)
        } else if (type === "Debit") {
            initialBankData[account].transactions.totalDebit += amount
            initialBankData[account].transactions.debit.push(amount)
        }

        if (initialBankData[account].transactions.recentTransactions.length < MAX_RECENT_TRANSACTIONS_LENGTH ) {
            initialBankData[account].transactions.recentTransactions.push({ amount, type })
        }
    }

    const tableBeginning = `<table class="w-full table table-fixed border-collapse border-spacing-[1px] rounded-lg overflow-hidden border border-blue">
    <colgroup>
        <col width="40%" />
        <col width="60%" />
    </colgroup>
    <thead class="font-workSans text-base text-white text-left">
        <tr class="bg-blue ">
            <th class="">
                <p class="pl-4 font-medium">Amount</p>
            </th>
            <th class="">
                <p class="font-medium">Transaction Type</p>
            </th>
        </tr>
    </thead>
    <tbody class="table-body font-sen text-dark">`

    const tableEnd = `</tbody>
    </table>`

    const state = {
        bankData: initialBankData,
        resultString: ""
    }

    let previousCommand = ""

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.bankData = obj.bankData
        state.resultString = obj.resultString

        render()
    }

    const listeners = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let instruction = inputLabel.innerHTML, command = input.value

            if (command === "0") {
                inputLabel.innerHTML = "Enter Command"
                previousCommand = ""
                input.setAttribute("max", 4)
                let resultString = ""

                form.reset()
                setState({ ...state, resultString })
            } else {
                if (instruction === "Enter Command") {
                    let resultString = `<p class="text-base text-dark">Enter account number.</p>`
                    inputLabel.innerHTML = "Enter account number"
                    previousCommand = command
                    input.setAttribute("max", 9999)
                    console.log(previousCommand, command)
                    form.reset()
                    setState({ ...state, resultString })
                } else if (instruction === "Enter account number") {
                    if (!state.bankData[command]) {
                        let resultString = `<p class="text-base text-red-600">Invalid account number. Please enter a valid account number.</p>`
                        console.log(state.bankData)
                        form.reset()
                        setState({ ...state, resultString })
                    } else {
                        console.log(state.bankData[command], previousCommand)

                        let { firstName, lastName, phone, transactions } = state.bankData[command]
                        if (previousCommand === "1") {
                            let resultString = `<p class="text-base text-dark">The account balance for ${firstName} ${lastName} is: <b>${transactions.totalCredit - transactions.totalDebit}</b></p>`
                            inputLabel.innerHTML = "Enter Command"
                            previousCommand = ""
                            input.setAttribute("max", 4)

                            form.reset()
                            setState({ ...state, resultString })
                        } else if (previousCommand === "2") {
                            let resultString = `<p class="text-base text-dark">The account details for account number <b>${command}</b> is: <b>['First Name: ${firstName}', 'Last Name: ${lastName}', 'Phone Number: ${phone}']</b></p>`
                            inputLabel.innerHTML = "Enter Command"
                            previousCommand = ""
                            input.setAttribute("max", 4)

                            form.reset()
                            setState({ ...state, resultString })
                        } else if (previousCommand === "3") {
                            let tableRows = ""
                            for (let i = 0; i < transactions.recentTransactions.length; i++) {
                                const { amount, type } = transactions.recentTransactions[i]
                                tableRows +=    `<tr class="table-body-row">
                                                    <td >
                                                        <p class="pl-4">${amount}</p>
                                                    </td>
                                                    <td >
                                                        <p class="">${type}</p>
                                                    </td>
                                                </tr>`
                            }

                            let resultString = `<p class="text-base text-dark">The last three transactions for ${firstName} ${lastName} are:</p>${tableBeginning + tableRows + tableEnd}`
                            inputLabel.innerHTML = "Enter Command"
                            previousCommand = ""
                            input.setAttribute("max", 4)

                            form.reset()
                            setState({ ...state, resultString })
                        } else if (previousCommand === "4") {
                            let resultString = `<p class="text-base text-dark">Enter <b>previous</b> phone number</p>`
                            inputLabel.innerHTML = "Enter previous phone number"
                            previousCommand = command
                            input.setAttribute("max", 99999999999)

                            form.reset()
                            setState({ ...state, resultString })
                        }
                    }
                } else if (instruction === "Enter previous phone number") {
                    let { firstName, lastName, phone, transactions } = state.bankData[previousCommand]

                    if (phone !== command) {
                        let resultString = `<p class="text-base text-red-600">Invalid phone number. This is not the correct phone number for ${firstName} ${lastName}. Please enter the correct phone number.</p>`

                        form.reset()
                        setState({ ...state, resultString })
                    } else {
                        let resultString = `<p class="text-base text-dark">Enter the <b>new</b> phone number</p>`
                        inputLabel.innerHTML = "Enter the new phone number"

                        form.reset()
                        setState({ ...state, resultString })
                    }
                } else if (instruction === "Enter the new phone number") {
                    if (!/^\d{11}$/.test(command)) {
                        let resultString = `<p class="text-base text-red-600">Invalid phone number. Your new phone number should be 11 digits.</p>`

                        form.reset()
                        setState({ ...state, resultString })
                    } else {
                        let updatedData = { ...state.bankData.previousCommand, phone: command }
                        
                        let resultString = `<p class="text-base text-[#10ff00]">Your new phone number has been changed.</p>`
                        inputLabel.innerHTML = "Enter Command"
                        previousCommand = ""
                        input.setAttribute("max", 4)
    
                        form.reset()
                        setState({ bankData: { ...state.bankData, [command]: updatedData }, resultString })
                    }
                }
            }
        })

    }

    const render = () => {
        resultWrap.innerHTML = ""

        if (!state.resultString) {
            resultWrap.classList.replace("block", "hidden")
        } else {
            resultWrap.classList.replace("hidden", "block")
            resultWrap.innerHTML = state.resultString
        }
    }

    return {
        init
    }
})()

export default ussdController