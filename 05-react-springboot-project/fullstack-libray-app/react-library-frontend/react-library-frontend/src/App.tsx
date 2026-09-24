import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar.tsx";
import {ExploreTopBooks} from "./layouts/home-page/ExploreTopBooks.tsx";
import {Carousel} from "./layouts/home-page/Carousel.tsx";

function App() {


  return (
         <>
          <NavigationBar/>
             <ExploreTopBooks/>
             <Carousel/>
        </>

  )
}

export default App
