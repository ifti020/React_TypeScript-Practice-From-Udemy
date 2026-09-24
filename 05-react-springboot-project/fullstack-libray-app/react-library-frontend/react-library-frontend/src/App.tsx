import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar.tsx";

import {HomePage} from "./layouts/home-page/HomePage.tsx";

function App() {

  return (
         <>
          <NavigationBar />
             <HomePage />
        </>

  )
}

export default App
