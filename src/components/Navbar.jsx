import { useEffect } from "react"


export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  },[menuOpen])
  return (

<nav className="fixed top-0 left-0 md:top-8 w-full z-40 bg-[rgba(255,255,255,0.2)] backdrop-blur-xs">
  <div className="flex ml-8 mr-8 items-center justify-between max-w-7xl  h-16 ">
    <div className="space-x-2">
      <a href="#work" className="pr-2 text-2xl sm:text-2xl md:text-3xl text-gray-700 ">Rick Tadeu</a>
      <span className=" sm:text-2xl text-gray-600 sm:ml-4 ">beauty artist</span>
      </div>

{!menuOpen && (
  <div
    className="relative cursor-pointer text-gray-950 z-40 md:hidden text-2xl"
    onClick={() => setMenuOpen(true)}
  >
    &#9776;
  </div>
)}


      <div className="hidden md:flex gap-14">
        <a href="#work" className="text-xl text-gray-800 tracking-wider hover:text-gray-700 transition-colors">Work</a>
        <a href="#about" className="text-xl text-gray-800 tracking-wider hover:text-gray-700 transition-colors">About</a>
        <a href="#contact" className="text-xl text-gray-800 tracking-widest hover:text-gray-700 transition-colors">Contact</a>
      </div>

    </div>
  </nav>
  )
}