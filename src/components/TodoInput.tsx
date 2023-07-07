import './TodoInput.css';
import {useState} from 'react';
export const TodoInput = (props: any) => {
   const [todoItem,setTodoItem] = useState('');
   
   const addTodoItem = () => {
    props.updateTodoList(todoItem);
    setTodoItem('');
   };
   const handleKeyup = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        props.updateTodoList(e.currentTarget.getAttribute('value'));
        setTodoItem('')
    }
  }
    return(
        <div className='input-container'>
            <input type="text" className='todo-input' placeholder='enter todo here' value={todoItem} onKeyUp={(event) => { event.key === "Enter" && handleKeyup(event)} } onChange={(event)=> setTodoItem(event.target.value)}/>
            <button className='add-todo-btn' onClick={()=> todoItem && addTodoItem()}>+</button>
        </div>
    );
}