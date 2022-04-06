import { computed, reactive } from 'vue'

const state = reactive({
  income: 0,
  expense: 0,
})

export default {
  state,

  balance: computed(() => state.income - state.expense),

  setIncome(val: number) {
    this.state.income = val
  },

  setExpense(val: number) {
    this.state.expense = val
  },
}
