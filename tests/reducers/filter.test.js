import { reducer, actions, filterTypes } from '../../src/store/ui/filter'

test('TodoListのfilterをセット', () =>{
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.ALL))).toEqual(filterTypes.ALL)
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.ACTIVE))).toEqual(filterTypes.ACTIVE)
  expect(reducer(undefined, actions.setVisibleFilter(filterTypes.COMPLETE))).toEqual(filterTypes.COMPLETE)
})