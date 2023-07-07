import React, { useState } from 'react';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [todoList,setTodoList] = useState<string[]>([]);
  const updateTodoList = (todoItem: string) => {
    setTodoList([...todoList,todoItem]);
  }
  const deleteItem = (indexVal: number) => {
    let curList = [...todoList];
    curList.splice(indexVal, 1);
    setTodoList([...curList]);
  }
  return (
    <div className="mainContainer">
      <div className='todoContainer'>
          <TodoInput updateTodoList={updateTodoList}/>
          <TodoList todoList={todoList} deleteItem={deleteItem}/>
      </div>
    </div>
  );
}

export default App;
