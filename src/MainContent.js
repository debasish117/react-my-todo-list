import React from "react"
import './MainContent.css'
import TodoItem from './TodoItem'
import todosData from './todosData'

class MainContent extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }
    handleCheckBoxChange(id){
        this.setState((prevState)=>{
            const updatedTodos = prevState.todos.map((todo)=>{
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render(){
        const todosDataItems = this.state.todos.map((item)=><TodoItem key={item.id} todoItem={item} 
        handleCheckBoxChange={this.handleCheckBoxChange.bind(this)}/>) 
        return(
            <div className="main-content">
                <div className="todo-list">
                    {todosDataItems}
                </div>
            </div>
        )
    }
    
}
export default MainContent;