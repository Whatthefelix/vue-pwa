import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    update_user (state, user) {
      console.log(user)
      state.user = user
    }
  }
})

export default store
