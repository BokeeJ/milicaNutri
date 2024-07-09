import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { Outlet } from "react-router-dom"
function App() {


  return (

    <div>
      <Navbar />
      <Outlet />
    </div>

  )
}

export default App
