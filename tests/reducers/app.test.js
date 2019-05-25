import { reducer, actions } from '../../src/store/app/app'

test('app のlock', () => {
  const expected = {
    isLock: true
  }
  expect(reducer(undefined, actions.lock())).toEqual(expected)
})

test('app のunlock', () => {
  const initState = {
    isLock: true
  }
  const expected = {
    isLock: false
  }
  expect(reducer(initState, actions.unlock())).toEqual(expected)
})

