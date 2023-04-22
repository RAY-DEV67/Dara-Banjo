import { useState } from 'react'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'
import { LandingPage } from './pages/LandingPage'
import { Styles } from './pages/styles'

function App() {

  return (
    <div className="App">
      <Router>
     {/* <ScrollToTop> */}
     <Navbar/>
      <Routes>
       <Route path="/" element={<LandingPage />} />
      <Route path="/Styles" element={<Styles/>} />
      </Routes>
     {/* </ScrollToTop> */}
    </Router>
    </div>
  )
}

export default App
