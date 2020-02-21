import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = String(Date.now())
  MY_TASKS = 'My Tasks'
  state = {
    input: '',
    todos: []
  }
  componentDidMount() {
    const todos = this.getLocalStorage()
    this.setState({todos: todos})
  }
  setLocalStorage = (todos) => {
    localStorage.setItem(this.MY_TASKS, JSON.stringify(todos))
  }
  getLocalStorage = () => {
    const getTodos = JSON.parse(localStorage.getItem(this.MY_TASKS)) || []
    return getTodos
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {todos, input} = this.state
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++, text: input, checked: false})
    })
    this.setLocalStorage(todos)
  }  
  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const restTodos = [...todos]

    restTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    this.setState({ todos: restTodos })
    this.setLocalStorage(restTodos)
  }
  handleRemove = (id) => {
    const {todos} = this.state
    const filterTodos = todos.filter(todo => todo.id !== id)
    this.setState({ todos: filterTodos })
    this.setLocalStorage(filterTodos)
  }
  render() {
    const {input, todos} = this.state
    return (
      <TodoListTemplate form={<Form 
      value={input} 
      onChange={this.handleChange} 
      onSubmit={this.handleSubmit}/>}>
        <TodoItemList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
      </TodoListTemplate>
    )
  }
}

export default App;
