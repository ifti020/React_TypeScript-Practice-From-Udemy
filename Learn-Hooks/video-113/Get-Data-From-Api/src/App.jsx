import {useEffect, useState} from 'react'

import './App.css'

import Navbar from "./components/Navbar.jsx";

function App() {

    const [cards, setCards] = useState([])

    const fetchData = async ()=>{
        let a = await fetch ("https://jsonplaceholder.typicode.com/posts");
        let data = await a.json();
        setCards(data);
        console.log(data);
    }
    useEffect(() => {
    fetchData()
    },[])

  return (

    <>
        <Navbar/>
      <div className="container">
          {cards.map((card) => {
                    return <div className="card" key={card.id}>
                        <h1>By UserId: {card.userId}</h1>
                        <h1>{card.title}</h1>
                        <p>{card.body}</p>
                    </div>
              })
          }
      </div>

    </>
  )
}

export default App
