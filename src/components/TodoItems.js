import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    const {text, id, checked, onToggle, onRemove} = this.props
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation()
          onRemove(id)
        }}>❌</div>
        <div className={`todo-item ${checked && 'checked'}`}>{text}</div>
        {checked && (<div className="checked">✅</div>)}
      </div>
    )
  }
}

export default TodoItem