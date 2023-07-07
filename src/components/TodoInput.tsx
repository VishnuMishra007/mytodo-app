import './TodoInput.css';
import {useState} from 'react';
export const TodoInput = (props: any) => {
   const [todoItem,setTodoItem] = useState('');
   
   const addTodoItem = () => {
    props.updateTodoList(todoItem);
    setTodoItem('');
   };
    return(
        <div className='input-container'>
            <input type="text" className='todo-input' placeholder='enter todo here' value={todoItem} onChange={(event)=> setTodoItem(event.target.value)}/>
            <button className='add-todo-btn' onClick={()=> todoItem && addTodoItem()}>+</button>
        </div>
    );
}