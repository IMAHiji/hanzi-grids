/* eslint-disable no-param-reassign */
export const state = () => {
  return {
    character: '安',
  }
}

export const mutations = {
  updateActiveCharacter: (state, payload) => {
    state.character = payload;
  }
}

export const actions = {
  updateActiveCharacter: ({ commit }, payload )=> {
    commit('updateActiveCharacter', payload.target.value);
  }
}

export const getters = {
  activeCharacter: state => state.character,
}


