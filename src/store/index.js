import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false
    }
  },
  mutations: {
    authStateChange (state) {
      console.log(state.user.loggedIn + ' b4')
      state.user.loggedIn = !state.user.loggedIn
      console.log(state.user.loggedIn + ' after')
    }
  }
})

export default store
