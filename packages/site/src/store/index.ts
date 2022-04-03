import { reactive } from '@vue/reactivity'

export default {
  state: reactive({
    income: 0,
    expense: 0,
  }),

  getBalance() {
    return this.state.income - this.state.expense
  },

  setIncome(val: number) {
    this.state.income = val
  },

  setExpense(val: number) {
    this.state.expense = val
  },
}
