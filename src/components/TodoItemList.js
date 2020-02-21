import React, { Component } from 'react';
import TodoItem from './TodoItems';

class TodoItemList extends Component {
  render() {
    const {todos, onToggle, onRemove} = this.props
    const todoItem = todos.map((todo) => 
      <TodoItem 
      key={todo.id}
      text={todo.text}
      id={todo.id}
      checked={todo.checked} 
      onToggle={onToggle} 
      onRemove={onRemove} />
    )
    return <>
      {todoItem}
    </>
  }
}

export default TodoItemList