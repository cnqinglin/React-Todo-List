import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';
import UserDialog from './UserDialog';
import {getCurrentUser, signOut, TodoModel} from './leanCloud'

import ReactDOM from "react-dom";


function Clock(props) {
  return (
    <div className="wrap">
      <div className="year">
        <div className="count"> 1 </div>
        <div className="month"><p>NOV</p>2019<p></p></div>
      </div>
      <div className="clock">{props.date.toTimeString()}.</div>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root3"));
}

setInterval(tick, 1000);


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      placeholder:"What needs to be done?",
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: []
    }
    let user = getCurrentUser()
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }
  render(){
    
    let todos = this.state.todoList
      .filter((item)=> !item.deleted)
      .map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })
   

   

    return (
      <div className="App" >
        <div className="fix" >
        <div className="Topbar-wrapper" >
            <div className="logo" id="root3"></div>
            <div className="title">{this.state.user.username||'欢迎使用'}</div>
            <div className="date" ></div>
            <div className="search">
            <input type="search" placeholder="google"/>
            </div>
            <div className="btn">
              {this.state.user.id ? <button className="button" onClick={this.signOut.bind(this)}>注销</button> : null}
            </div>
        </div>
        <div className="middle" >
              <div className="tick ">TickTick</div>
              <div className="paragraph">让你的时间变得不再是那么无聊</div>
        </div>
       <div className="inputWrapper" >
        <div>
          <p className="new-todo">what do you need to do?</p>
          <TodoInput
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} > 
          </TodoInput>
        </div>
      </div>
       </div>
       <ol className="todoList">
       {todos}
       </ol>
       {this.state.user.id ? 
          null : 
          <UserDialog 
          onSignUp={this.onSignUpOrSignIn.bind(this)}
          onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    )
  }
  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }
  onSignUpOrSignIn(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }
  componentDidUpdate(){
    
  }
  toggle(e, todo){
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed'
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    }) 
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  addTodo(event){
    let newTodo = {
      
      title: event.target.value,
      status: '',
      deleted: false
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
      console.log(error)
    })
  }
  delete(event, todo){
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true
      this.setState(this.state)
    })
  }
}

export default App;
