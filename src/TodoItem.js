import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    
    let strikeOff
    if (props.todoItem.completed) {
        strikeOff = {
            textDecoration: 'line-through'
        }
    }
    return(
        <div className="todo-item">
            <input type="checkbox" onChange={()=>props.handleCheckBoxChange(props.todoItem.id)} checked={props.todoItem.completed}/>
            <p style={strikeOff}>{props.todoItem.text}</p>
        </div>
    )
}

export default TodoItem