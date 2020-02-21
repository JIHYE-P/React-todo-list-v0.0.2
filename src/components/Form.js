import React from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
  input {
    display: inline-block;
    width: 100%;
    padding: 5px 0px 5px 20px;
    box-sizing: border-box;
    border: transparent;
    border-bottom: 1px solid #e6e6e6;
    font-size: 20px;
    font-family: 'Do Hyeon';
    color: #e6e6e6;
    &:focus {
      color: #222;
      border-color: #82c91e;
      outline: none;
    }
  }
`

const Form = ({value, onChange, onSubmit}) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="Add a new Task" />
    </FormStyled>
  )
}

export default Form