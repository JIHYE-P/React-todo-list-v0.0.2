import React from 'react'

const TodoListTemplate = ({form, children}) => {
  return (
    <section className="todo-template">
      <h1 className="title">My Tasks</h1>
      <div className="form-wrapper">
        {form}
      </div>
      <div className="todo-wrapper">
        {children}
      </div>
    </section>
  )
}

export default TodoListTemplate