import * as types from './mutation-types'

const mutations = {
  [types.SET_ONE_INFO] (state, info) {
    state.msgs = info
    /**
     * Or the other function to deal you get the state or the son's data into info
     */
  }
}

export default mutations
