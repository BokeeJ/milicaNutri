import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop"
import ScrollTab from "./Components/ScrollTab"
function App() {


  return (

    <div>
      <ScrollToTop />
      <ScrollTab />
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
