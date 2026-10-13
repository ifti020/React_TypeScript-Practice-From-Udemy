import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const [name, setName] = useState("Ifti")

  const [form, setForm] = useState({email:"", phone:""})
  const handleClick = () => {
    alert("Hey I'm Clicked")
  }
  const handleMouseOver = () => {
    alert("Hey i am a mouse over")
  }

  const handleChange = (e) =>
  {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
      <button onClick={handleClick}>Click Me </button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am Red div
      </div>

      <input type="email" name="email" value={form.email ?form.email:''} onChange={handleChange}/>
      <input type="number" name="phone" value={form.phone ?form.phone:''} onChange={handleChange}/>
    </>
  )
}

export default App
