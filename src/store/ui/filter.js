import { SET_VISIBLE_FILTER } from '../actionTypes/filter'

export const filterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETE: "SHOW_COMPLETE"
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
        filter: filterTypes.SHOW_ALL
      }
    }
  }
}

export const reducer = (state = filterTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filter
    default:
      return state
  }
}
