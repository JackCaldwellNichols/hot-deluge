
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Borja from './pages/Borja/Borja'
import Home from './pages/Home.jsx'
import Menu from './components/Menu/Menu.jsx'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {


const [open, setOpen] = useState(false)
console.log(open)
  return (

    <BrowserRouter>
    <Navbar open={open} setOpen={setOpen}/>
    <Menu open={open} setOpen={setOpen}/>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='member/:name' element={<Borja />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  
  )
}

export default App
