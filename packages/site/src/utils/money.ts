import sponsors from '~/../public/manual-sponsors.json'
import expenses from '~/assets/data/expenses.yml'
import store from '~/store'

export function sumIncome() {
  let total = 0
  sponsors.forEach((sponsor) => {
    total += sponsor.total
  })

  store.setIncome(total)
}

export interface Expense {
  memo: string
  business: string
  amount: number
  date: Date
}

export function sumExpense() {
  let total = 0
  expenses.forEach((expense: Expense) => {
    total += expense.amount
  })

  store.setExpense(total)
}
