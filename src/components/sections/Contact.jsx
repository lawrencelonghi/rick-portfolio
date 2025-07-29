export const Contact  = () => {
  return (
    <section id="contact" className="flex flex-col md:flex-row  md:ml-30 ml-8 pt-18 md:gap-80 gap-4 pb-10 md:pt-28">
       <div className="flex items-center gap-4">
        <img src="instagram-logo-thin-svgrepo-com.svg" className="w-9" />
        <a href="/" className="text-1xl md:text-2xl text-gray-800 tracking-widest hover:text-gray-950 transition-colors">rickmakeup</a>
      </div> 

       <div className="flex items-center gap-4">
        <img src="email-logo.png" className="w-10" />
        <a href="/" className="text-gray-800 tracking-widest md:text-2xl hover:text-gray-950 transition-colors">rickmakeup@gmail.com</a>
      </div> 
    </section>
  )
}