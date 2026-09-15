

import './App.css'
import {TodoTable} from "./components/TodoTable.jsx";
import {NewTodoForm} from "./components/NewTodoForm.jsx";
import {useState} from "react";

function App() {
 const initialTodos= [
     {rowNumber: 1, rowDescription: 'Feed Chicken' , rowAssigned: 'User One'},
     {rowNumber: 2, rowDescription: 'Water Plants' , rowAssigned: 'User Two'},
     {rowNumber: 3, rowDescription: 'Make Dinner' , rowAssigned: 'User Three'},
     {rowNumber: 4, rowDescription: 'Clean Bedroom' , rowAssigned: 'User Four'},
     {rowNumber: 5, rowDescription: 'Get Haircut' , rowAssigned: 'User Five'}
     ]

 const [todos, setTodos] = useState(initialTodos)

 const addTodo = (assigned, description)=>{

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

  return (

     <div className='full-table'>
         <div>
             <div>
                 Your Todo's
             </div>
             <div>
                <TodoTable todos={todos}/>
                 <button onClick={addTodo}>
                     Click Me!
                 </button>
             </div>
             <NewTodoForm addTodo={addTodo}/>
         </div>
     </div>

  )

}

export default App


