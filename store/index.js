/* eslint-disable no-param-reassign */
import calculateNumberOfGridElements from '~/plugins/gridCalc'

const zoneHeight = 9.5;
const zoneWidth = 8;

export const state = () => {
  return {
    character: '安',
    lineLength: 7,
    numberOfLines: 9,
    gridType: 'rice',
    gridElement:{
      side:1,
      fontSize:70
    }
  }
}

export const mutations = {
  updateActiveCharacter: (state, payload) => {
    state.character = payload;
  },
  updateNumberOfElements: (state, payload) => {
    state.numberOfLines = payload.numberOfLines;
    state.lineLength = payload.lineLength;
  },
  updateSize: (state, payload) => {
    state.gridElement.side = payload;

    switch(payload){
      case '0.7':
        state.gridElement.fontSize = 60
        break;
      case '0.6':
        state.gridElement.fontSize = 50
        break;
      case '0.5':
        state.gridElement.fontSize = 40
        break;
      default:
        state.gridElement.fontSize = 70
        break;
    }
    console.log('outside size', typeof payload)
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

    const elementsPayload = calculateNumberOfGridElements(zoneHeight, zoneWidth, payload);
    commit('updateNumberOfElements', elementsPayload)
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
  lineLength: state => state.lineLength,
  numberOfLines: state => state.numberOfLines,
  gridElement: state => state.gridElement,
  gridType: state => state.gridType,
}


