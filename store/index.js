import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards'
Vue.use(Vuex)

// eslint-disable-next-line import/no-named-as-default-member
const store = () => new Vuex.Store({
  modules: {
    cards
  }
})

export default store
