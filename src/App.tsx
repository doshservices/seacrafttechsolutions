import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Carrers, Home, Services } from './pages'
import { Footer, NavBar } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/carrers' element={<Carrers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
