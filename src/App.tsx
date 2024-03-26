import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Carrers, Contact, Home, Project, ProjectOverview, Service, Services } from './pages'
import { Footer, NavBar, ScrollToTop } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Service />} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/overview' element={<ProjectOverview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
