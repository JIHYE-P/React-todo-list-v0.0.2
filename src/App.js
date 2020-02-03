import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 0
  TODOS = 'todos'
  state = {
    input: '',
    todos: []
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      input: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {todos, input} = this.state
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++, text: input, checked: false})
    })
    localStorage.setItem(this.TODOS, JSON.stringify(todos))
  }
  render() {
    const {input} = this.state
    return (
      <TodoListTemplate form={<Form 
      value={input} 
      onChange={this.handleChange} 
      onSubmit={this.handleSubmit}/>}>
        <TodoItemList />
      </TodoListTemplate>
    )
  }
}

export default App;
