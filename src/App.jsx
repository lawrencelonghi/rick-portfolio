import { useState } from 'react'
import './index.css'
import './App.css'
import Lightbox from 'yet-another-react-lightbox-lite'
import "yet-another-react-lightbox-lite/styles.css"
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Work } from './components/sections/Work'
import { About } from './components/sections/About'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return <>
  <div>

  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <Work />
  <About />
  
  </div>
  

  </>
}

export default App
