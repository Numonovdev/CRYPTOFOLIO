import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HeroCarousel from "./components/HeroCarousel"
import Home from "./pages/Home"
import Product from "./pages/Product"
import { WatchlistContext } from "./contaxt/WatchlistContext"
import { useState } from "react"

function App() {
const [watchlist,setWatchlist]=useState([])

  return (
        <WatchlistContext.Provider value={{watchlist, setWatchlist}}>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
      </Routes>
    </div>
        </WatchlistContext.Provider>
  )
}

export default App
