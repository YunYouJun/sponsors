import type { RankSponsor } from '@sponsors/types'
import store from '~/store'

export function sumIncome(sponsors: RankSponsor[]) {
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

export function sumExpense(expenses: Expense[]) {
  let total = 0
  expenses.forEach((expense: Expense) => {
    total += expense.amount
  })
  store.setExpense(total)
}
