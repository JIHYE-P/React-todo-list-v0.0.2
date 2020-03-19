import React from 'react'
import styled from 'styled-components'

const TodoTmplateStyled = styled.section`
  width: 500px;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  h1 {
    margin: 20px 0;
    font-family: 'Do Hyeon';
    font-size: 38px;
    margin-bottom: 20px;
    color: #82c91e;
  }
`

const TodoListTemplate = ({form, children}) => {
  return (
    <TodoTmplateStyled>
      <h1 className="title">My Tasks</h1>
      <div className="form-wrapper">
        {form}
      </div>
      <div className="todo-wrapper">
        {children}
      </div>
    </TodoTmplateStyled>
  )
}

export default TodoListTemplate