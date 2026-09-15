import { useState } from 'react'
import { TodoRowItem } from './components/TodoRowItem'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
                        <TodoRowItem/>
                        <TodoRowItem/>
                        <TodoRowItem/>
                     <tr>
                         <td>2</td>
                         <td>Get HairCut</td>
                         <td>Ifti</td>

                     </tr>
                     </tbody>
                 </table>
             </div>
         </div>
     </div>

  )
}

export default App


