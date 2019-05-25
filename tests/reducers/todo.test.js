import { reducer, actions } from '../../src/store/domain/todo'


const initState = {
  selected: null,
  data: [{
    id: 0,
    text: "text",
    editing: false,
    completed: false
  }]
}

test('初期ステート', () => {
  const defaultState = {
    selected: null,
    data: []
  }
  expect(reducer(undefined, {type: "test"})).toEqual(defaultState)
})

test('Todoの追加', () => {
  const expected = {
    selected: null,
    data: [{
      id: 0,
      text: "text",
      editing: false,
      completed: false
    }]
  }
  expect(reducer(undefined, actions.addTodo('text'))).toEqual(expected)
})

test('Todoの編集', () => {
  const expected = {
    selected: null,
    data: [{
      id: 0,
      text: "編集済みテキスト",
      editing: false,
      completed: false
    }]
  }
  expect(reducer(initState, actions.editTodo(0, "編集済みテキスト"))).toEqual(expected)
})

test('Todo編集中', () => {
  const expected = {
    selected: null,
    data: [{
      id: 0, text: "text",
      editing: true,
      completed: false
    }]
  }
  expect(reducer(initState, actions.editingTodo(0))).toEqual(expected)
})

test('Todoの削除', () => {
  const expected = {
    selected: null,
    data: []
  }
  expect(reducer(initState, actions.removeTodo(0))).toEqual(expected)
})

test('Todo 未完了 -> 完了', () => {
  const expected = {
    selected: null,
    data: [{
      id: 0,
      text: "text",
      editing: false,
      completed: true
    }]
  }
  expect(reducer(initState, actions.toggleCompleted(0))).toEqual(expected)
})

test('Todo 完了 -> 未完了', () => {
  const initState = {
    selected: null,
    data: [{
      id: 0,
      text: "text",
      editing: false,
      completed: true
    }]
  }
  const expected = {
    selected: null,
    data: [{
      id: 0,
      text: "text",
      editing: false,
      completed: false
    }]
  }
  expect(reducer(initState, actions.toggleCompleted(0))).toEqual(expected)
})

test('Todoの選択', () => {
  const expected = {
    selected: 0,
    data: [{
      id: 0,
      text: "text",
      editing: false,
      completed: false
    }]
  }
  expect(reducer(initState, actions.selectId(0))).toEqual(expected)
})