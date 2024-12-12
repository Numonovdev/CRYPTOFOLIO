import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HeroCarousel from "./components/HeroCarousel"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App
