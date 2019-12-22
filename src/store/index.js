import Vue from 'vue'
import Vuex from 'vuex'
import Budget from './modules/budget.js'
import Todos from './modules/todos.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    budget: Budget,
    todos: Todos,
  }
})

