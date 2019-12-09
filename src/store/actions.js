import * as types from './mutation-types'
import { User } from '@/common/status'

export const theActionFun = function ({ commit, state }) {
  commit(types.SET_ONE_INFO, User.admin)
}
