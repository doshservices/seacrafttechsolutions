import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import { Footer, NavBar } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
