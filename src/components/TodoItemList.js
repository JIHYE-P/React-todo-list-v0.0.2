import React, { Component } from 'react';
import TodoItem from './TodoItems';

class TodoItemList extends Component {
  render() {
    const {text, onToggle, onRemove} = this.props
    return (
      <TodoItem />
    )
  }
}

export default TodoItemList