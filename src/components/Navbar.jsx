export const Navbar = () =>{

  return (
<nav className="fixed sm:top-14 top-4 w-full z-40 bg-[rgba(255,255,255,0.3)] backdrop-blur-lg">
  <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4">
    <div className="flex flex-col sm:flex-row sm:items-center gap-0">
      <a href="#Work" className="text-2xl sm:text-4xl text-gray-600 ">Rick Tadeu</a>
      <span className="text-xl sm:text-3xl text-gray-500 sm:ml-4 ">beauty artist</span>
      </div>

      <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
        &#9776;
      </div>


      <div className="hidden md:flex items-center space-x-24">
        <a href="#Work" className="text-xl text-gray-500 hover:text-gray-700 transition-colors">Work</a>
        <a href="#About" className="text-xl text-gray-500 hover:text-gray-700 transition-colors">About</a>
        <a href="#Contact" className="text-xl text-gray-500 hover:text-gray-700 transition-colors">Contact</a>
      </div>

    </div>
  </nav>
  )
}