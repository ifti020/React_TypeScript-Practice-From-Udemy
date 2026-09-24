import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar.tsx";
import {ExploreTopBooks} from "./layouts/home-page/ExploreTopBooks.tsx";

function App() {


  return (
         <>
          <NavigationBar/>
             <ExploreTopBooks/>
        </>

  )
}

export default App
