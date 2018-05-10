/* eslint-disable no-param-reassign */
import calculateNumberOfGridElements from '~/plugins/gridCalc'

export const state = () => {
  return {
    character: '安',
    numberOfElements:0,
  }
}

export const mutations = {
  updateActiveCharacter: (state, payload) => {
    state.character = payload;
  },
  updateNumberOfElements: (state, payload) => {
    state.numberOfElements = payload;
  }
}

export const actions = {
  updateActiveCharacter: ({ commit }, payload )=> {
    commit('updateActiveCharacter', payload.target.value);
  },
  updateNumberOfElements:({ commit }, payload)=>{
    const number = calculateNumberOfGridElements(9.5, 7.5, 1);
    commit('updateNumberOfElements', number)
  }
}

export const getters = {
  activeCharacter: state => state.character,
  numberOfElements: state => state.numberOfElements
}


