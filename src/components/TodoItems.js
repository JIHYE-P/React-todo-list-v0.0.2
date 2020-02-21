import React, { Component } from 'react'
import styled from 'styled-components';

const TodoList = styled.div`
  padding: 12px 20px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  text-align: left;
  cursor: pointer;
  .remove,
  .checked {
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -12.5px;
    background: transparent;
  }
  .remove {
    opacity: 0;
    right: 10px;
    color: #f03e3e;
    font-size: 18px;
  }
  .checked {
    left: 15px;
    font-size: 15px;
  }
  .todo-item {
    padding-right: 40px;
    padding-left: 30px;
    box-sizing: border-box;
    color: #333;
    font-size: 21px;
    font-family: 'Do Hyeon';
  }
  .todo-checked {
    text-decoration: line-through;
    color: #d8d8d8;
  }
  &:hover {
    background: #eee;
    .remove {
      opacity: 1
    }
  }
  &:last-child {
    border-radius: 0 0 15px 15px;
  }
`

class TodoItem extends Component {
  componentDidUpdate (prevProps, prevState) {
    return this.props.checked !== prevProps.checked;
  }
  render () {
    const {text, id, checked, onToggle, onRemove} = this.props
    return (
      <TodoList onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }}>✖</div>
        <div className={`todo-item ${checked && 'todo-checked'}`}>{text}</div>
        {checked 
        ? <div className="checked active">🟢</div>
        : <div className="checked default">⚪</div>
        }
      </TodoList>
    )
  }
}

export default TodoItem