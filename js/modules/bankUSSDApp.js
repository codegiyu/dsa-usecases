import { CUSTOMER_ACCOUNT_INFORMATION, CUSTOMER_ACCOUNT_TRANSACTIONS } from "../data/bankInfo.js";

const ussdController = (() => {
    const form = document.querySelector("form")
    const input = document.querySelector(".input")
    const resultWrap = document.querySelector(".result")

    accountData = CUSTOMER_ACCOUNT_INFORMATION.split("Phone Number ")[1].split(" ").map(item => item.split(","))
    transactionData = CUSTOMER_ACCOUNT_TRANSACTIONS.split("/Debit ")[1].split(" ").map(item => item.split(","))

    const initialBankData = {}

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
        if (type === "Credit") {
            initialBankData[account].transactions.totalCredit += amount
            initialBankData[account].transactions.credit.push(amount)
        } else if (type === "Debit") {
            initialBankData[account].transactions.totalDebit += amount
            initialBankData[account].transactions.debit.push(amount)
        }

        initialBankData[account].transactions.recentTransactions.push({ amount, type })
        if (initialBankData[account].transactions.recentTransactions.length > 3 ) {
            initialBankData[account].transactions.recentTransactions.shift()
        }
    }

    const state = {
        bankData: initialBankData
    }

    const init = () => {
        render()
        listeners()
    }

    const setState = (obj) => {
        state.bankData = obj.bankData

        render()
    }

    const listeners = () => {

    }

    const render = () => {

    }

    return {
        init
    }
})()

export default ussdController