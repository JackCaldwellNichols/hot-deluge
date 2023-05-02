
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Borja from './pages/Borja/Borja'
import Home from './pages/Home.jsx'

function App() {
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='member/:name' element={<Borja />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
