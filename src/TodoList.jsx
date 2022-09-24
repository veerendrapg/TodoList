import React from 'react'
import Header from './components/TodoList/Header';
import List from './components/TodoList/List';
import Form from './components/TodoList/Form';
function TodoList() {
  return (
    <div className="TodoList">
    <Header/>
    <List/>
   
    </div>
  )
}


export default TodoList