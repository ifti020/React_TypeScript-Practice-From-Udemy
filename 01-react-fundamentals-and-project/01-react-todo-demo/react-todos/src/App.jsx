

import './App.css'
import {TodoTable} from "./components/TodoTable.jsx";

function App() {
 const todos= [
     {rowNumber: 1, rowDescription: 'Feed Chicken' , rowAssigned: 'User One'},
     {rowNumber: 2, rowDescription: 'Water Plants' , rowAssigned: 'User Two'},
     {rowNumber: 3, rowDescription: 'Make Dinner' , rowAssigned: 'User Three'},
     {rowNumber: 4, rowDescription: 'Clean Bedroom' , rowAssigned: 'User Four'},
     {rowNumber: 5, rowDescription: 'Get Haircut' , rowAssigned: 'User Five'}
     ];

  return (

     <div className='full-table'>
         <div>
             <div>
                 Your Todo's
             </div>
             <div>
                <TodoTable todos={todos}/>
             </div>
         </div>
     </div>

  )

}

export default App


