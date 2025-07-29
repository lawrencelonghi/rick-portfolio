import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Work } from './components/sections/Work'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'

//lightgallery modal
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
 

  return <>
  <div>

  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <Work />
  <About />
  <Contact />
  
  </div>
  

  </>
}

export default App
