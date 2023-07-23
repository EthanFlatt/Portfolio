import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return ( 
  <div className="App">
    <Nav />

    <Routes>

    <Route exact path = '/' element = {<About/>}/>
    <Route exact path = '/projects' element = {<Projects/>}/>
    <Route exact path = '/resume' element = {<Resume/>}/>
    <Route exact path = '/contact' element = {<Contact/>}/>

    </Routes>
    <Footer></Footer>
  </div>
  )
}

export default App
