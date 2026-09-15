import { useState } from 'react'

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
                     <tr>
                         <td>1</td>
                         <td>Feed Chicken</td>
                         <td>Ifti</td>

                     </tr>
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


