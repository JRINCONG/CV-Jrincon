import { Abaut } from "./pages/Abaut"
import { Hero } from "./pages/Hero"
import {Menu} from "./pages/Menu"
import { Skill } from "./pages/Skill"

function App() {
  

  return (
    <>
      <div className="sm:container mx-auto px-20">
        <Menu/>
     <Hero/>
     <Abaut/>
     <Skill/>
      </div>
      
    </>
  )
}

export default App
