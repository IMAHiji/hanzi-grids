/* eslint-disable no-param-reassign */
import calculateNumberOfGridElements from '~/plugins/gridCalc'

const zoneHeight = 9.5;
const zoneWidth = 7.5;

export const state = () => {
  return {
    character: '安',
    numberOfElements:0,
    gridType: 'rice',
    gridElement:{
      side:1,
    }
  }
}

export const mutations = {
  updateActiveCharacter: (state, payload) => {
    state.character = payload;
  },
  updateNumberOfElements: (state, payload) => {
    state.numberOfElements = payload;
  },
  updateSize: (state, payload) => {
    state.gridElement.side = payload;
  },
  updateGridType: (state, payload) => {
    state.gridType = payload;
  }
}

export const actions = {
  updateActiveCharacter: ({ commit }, payload )=> {
    commit('updateActiveCharacter', payload.target.value);
  },
  updateNumberOfElements:({ commit, state }, payload)=>{
    const number = calculateNumberOfGridElements(zoneHeight, zoneWidth, state.gridElement.side);
    commit('updateNumberOfElements', number)
  },
  updateSize:({ commit }, payload)=>{
    commit('updateSize', payload)
  },
  updateGridType:({ commit }, payload)=>{
    commit('updateGridType', payload)
  }
}

export const getters = {
  activeCharacter: state => state.character,
  numberOfElements: state => state.numberOfElements,
  gridElement: state => state.gridElement,
  gridType: state => state.gridType,
}


