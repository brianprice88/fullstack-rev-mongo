import React, { Component } from 'react';
import TodoListEntry from './TodoListEntry.jsx';
import axios from 'axios';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 0,
      todos: [],
    };
  this.getTodos = this.getTodos.bind(this);
  this.postTodo = this.postTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  this.updateTodo = this.updateTodo.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('/api/todos')
    .then((response) => {
      this.setState({
        todos: response.data
      })
    })
    .catch(err => {console.error(err)})
  }

  postTodo() {
    var name = this.state.todo;
    var priority = this.state.priority;
    axios.post('/api/todos', {name: name, priority: priority})
    .then(() => this.getTodos())
    .catch (err => {console.error(err)})
    
  }

  deleteTodo(_id) {
    axios.delete(`/api/todos/${_id}`)
    .then(() => this.getTodos())
    .catch(err => {console.error(err)})
  }

  updateTodo(index, change) {
    if (change === 0) {this.deleteTodo(index)}
    var edit = {priority: change}
    axios.put(`/api/todos/${index}`, edit)
    .then (() => this.getTodos())
    .catch(err => {console.error(err)})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postTodo();
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    }, () => console.log(this.state))
    
  }

  render() {

    return (
      <div>
        <h1>Todo List</h1>
        <form>
          Todo:
          <input type="text" name="todo" onChange = {this.handleChange}/>
          Priority:
          <input type="number" name="priority" onChange = {this.handleChange}/>
          <button onClick = {this.handleSubmit} >Submit </button>
        </form>
        <div>
          {this.state.todos.map ((todo, index) => (
            <TodoListEntry 
            key={index}
            todo = {todo} 
            deleteTodo={this.deleteTodo} 
            updateTodo={this.updateTodo}/>
          ))}
        </div>
      </div>
    );
  }
}

