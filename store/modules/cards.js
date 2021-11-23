const cardsList = window.localStorage.getItem('cardsList')
const state = () => ({
  cardsList:  cardsList ? JSON.parse(cardsList) : []
})

const mutations = {
  ADD_CARD(state, card) {
    state.cardsList.push({
      id: card.id,
      name: card.name,
      url: card.url,
      price: card.price,
      description: card.description
    })
  },
  REMOVE_CARD(state, card) {
    const cardNumber = state.cardsList.indexOf(card)
    state.cardsList.splice(cardNumber, 1)
    this.commit('cards/SAVE_CARD')
  },
  SAVE_CARD(state) {
    window.localStorage.setItem('cardsList', JSON.stringify(state.cardsList))
  }
}

const actions = {
  // add({ commit }, id) {
  //   commit('cards/ADD_CARD', id)
  // },
  // remove({ commit }, id) {
  //   commit('cards/REMOVE_CARD', id)
  // }
}

const getters = {
  cardsList(state) {
    return state.cardsList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
