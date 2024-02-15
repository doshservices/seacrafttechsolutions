import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Footer, NavBar } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
