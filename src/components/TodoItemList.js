import React, { Component } from 'react';
import TodoItem from './TodoItems';
import styled from 'styled-components';

const NoneTodo = styled.div`
  padding: 40px 20px;
  box-sizing: border-box;
  text-align: center;
  color: #d8d8d8;
  font-size: 21px;
  font-family: 'Do Hyeon';
`

class TodoItemList extends Component {
  componentDidUpdate (prevProps, prevState) {
    return this.props.checked !== prevProps.checked;
  }
    
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
      {todoItem.length !== 0
      ? todoItem
      : <NoneTodo>Not found a task</NoneTodo>
      }
    </>
  }
}

export default TodoItemList