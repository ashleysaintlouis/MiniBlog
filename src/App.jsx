import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/' element={<Home />} /> */}

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
