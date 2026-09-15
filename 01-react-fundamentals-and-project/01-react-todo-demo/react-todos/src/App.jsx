
import { TodoRowItem } from './components/TodoRowItem'

import './App.css'

function App() {
 const todos= [
     {rowNumber: 1, rowDescription: 'Feed Chicken' , rowAssigned: 'User One'},
     {rowNumber: 2, rowDescription: 'Water Plants' , rowAssigned: 'User Two'},
     {rowNumber: 3, rowDescription: 'Make Dinner' , rowAssigned: 'User Three'},
     {rowNumber: 4, rowDescription: 'Clean Bedroom' , rowAssigned: 'User Four'}
     ];

  return (

     <div className='full-table'>
         <div>
             <div>
                 Your Todo's
             </div>
             <div>
                 <table>
                     <thead>
                     <tr>
                         <th>#</th>
                         <th>Description</th>
                         <th>Assigned</th>
                     </tr>
                     </thead>
                     <tbody>

                     <TodoRowItem todo={todos[0]}/>
                     <TodoRowItem todo={todos[1]}/>
                     <TodoRowItem todo={todos[2]}/>
                     <TodoRowItem todo={todos[3]}/>

                     </tbody>
                 </table>
             </div>
         </div>
     </div>

  )

}

export default App


