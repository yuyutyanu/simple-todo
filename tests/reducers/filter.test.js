import { reducer, actions, filterTypes } from '../../src/store/ui/filter'

test('TodoListのfilterをセット', () =>{
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.SHOW_ALL))).toEqual(filterTypes.SHOW_ALL)
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.SHOW_ACTIVE))).toEqual(filterTypes.SHOW_ACTIVE)
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.SHOW_COMPLETE))).toEqual(filterTypes.SHOW_COMPLETE)
})