import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import {v4} from 'uuid';


class App extends Component {
  state={
    todos: [
      { 
        id:v4(), 
        title: 'Take out trash', 
        completed: false
      }, 
      {
        id:v4(), 
        title:'Go to the bank', 
        completed: true
      }, 
      {
        id:v4(),
         title:'Pay phone bills',
          completed: false }
         ]
    
  }
  markComplete=(id)=>{
        this.setState({todos:this.state.todos.map(x=>{
          if(x.id===id){
            x.completed=!x.completed 
          }
          return x;
        })})
  }
  //delTodo
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(x=>x.id!== id)]})
  }

  //addTodo
  addTodo=(title)=> {
    const newTodo={
      id:4,
      title,
      completed: false
    }
    this.setState({todos:[...this.state.todos,newTodo]})

  }

  render(){
  return (
    <div className="App">
      <div className='container'><Header/><AddTodo  addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/></div>
    </div> 
  );
}
}
export default App;
