import React from 'react'

const Form = ({value, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
    </form>
  )
}

export default Form