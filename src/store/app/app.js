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

const initState = {
  isLock: false
}
export const reducer = (state = initState, action) => {
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