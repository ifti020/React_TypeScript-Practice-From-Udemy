

import './App.css'
import {TodoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";
import {useState} from "react";

function App() {
  const initialTodos= [
    {rowNumber: 1, rowDescription: 'Feed Chicken' , rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water Plants' , rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner' , rowAssigned: 'User Three'},
    {rowNumber: 4, rowDescription: 'Clean Bedroom' , rowAssigned: 'User Four'},
    {rowNumber: 5, rowDescription: 'Get Haircut' , rowAssigned: 'User Five'}
  ]
  const [showForm, setShowForm] = useState(false)

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (assigned: string, description: string)=>{

    let newRowNumber
    if(todos.length > 0){
      newRowNumber = todos[todos.length-1].rowNumber + 1
    }
    else {
      newRowNumber = 1
    }
    const newTodo = {
      rowNumber:10,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  const deleteTodo = (deleteTodoRowNumber: number) =>{
    const filtered = todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber)
    setTodos(filtered)
  }

  return (

      <div className='full-table'>
        <div>
          <div>
            Your Todo's
          </div>
          <div>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
            <button onClick={() => setShowForm(!showForm)}>
              { showForm ? 'Hide Form' : 'Add New Todo' }
            </button>
          </div>
          {showForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>

  )

}

export default App