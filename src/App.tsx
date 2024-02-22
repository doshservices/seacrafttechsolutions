import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Carrers, Contact, Home, Services } from './pages'
import { Footer, NavBar } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
