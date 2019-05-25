import { SET_VISIBLE_FILTER } from '../actionTypes/filter'

export const filterTypes = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  COMPLETE: "COMPLETE"
}

export const actions = {
  setVisibleFilter (filterName) {
    if(filterTypes[filterName]){
      return {
        type: SET_VISIBLE_FILTER,
        filter: filterTypes[filterName]
      }
    }else{
      return {
        type: SET_VISIBLE_FILTER,
        filter: filterTypes.ALL
      }
    }
  }
}

export const reducer = (state = filterTypes.ALL, action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter
    default:
      return state
  }
}
