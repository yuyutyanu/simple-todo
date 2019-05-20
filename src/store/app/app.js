import { LOCK, UNLOCK } from '../actionTypes/app'

export const actions = {
  lock () {
    return {
      type: LOCK,
      lock: true
    }
  },
  unlock () {
    return {
      type: UNLOCK,
      lock: false
    }
  }
}

const initialState = {
  isLock: false
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCK:
      return {
        isLock: action.lock
      }
    case UNLOCK:
      return {
        isLock: action.lock
      }
    default:
      return state
  }
}