
import './TodoList.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const TodoList = (props: any) => {
    return(
        <div className="todo-list-container">
            <ul className='todo-list-items'>
                {props.todoList.map((item: string, index: number) => 
                <li key={`listItem_${index}`} className="todo-list-item">{item}
                <span key={`iconItem_${index}`} className='icon' onClick={(event)=> props.deleteItem(index)}><DeleteForeverIcon/></span>
                </li>)}
            </ul>
        </div>
    );
}