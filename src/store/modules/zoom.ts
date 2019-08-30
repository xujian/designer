import { Commit } from 'vuex'

export interface State {
  zoom: number,
}

const state: State = {
  zoom: 100,
}

const getters = {
  getZoom (state: State) {
    return state.zoom
  }
}

const actions = {
  out (context: {commit: Commit, state: State,}, step: number = 5) {
    context.commit('zoomOut', step)
  },
  in (context: {commit: Commit, state: State,}, step: number = 5) {
    context.commit('zoomIn', step)
  }
}

const mutations = {
  zoomOut (state: State, payload: number = 5) {
    state.zoom -= payload
  },
  zoomIn (state: State, payload: number = 5) {
    state.zoom += payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
