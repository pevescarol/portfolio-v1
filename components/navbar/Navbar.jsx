'use client'
import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import MobileNav from './MobileNav'


const Navbar = () => {
  // estado inicial - false
  const [navbar, setNavbar] = useState(false)
  const [color, setColor] = useState('transparent')

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('blur(16px)')
      } else {
        setColor('transparent')
      }
    };
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <nav style={{backdropFilter: `${color}`}} className='w-full fixed top-0 left-0 z-40 ease duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r from-body via-[#8f5cff] to-[#4e2df9] before:z-10'>
        <MobileNav open={navbar} setOpen={setNavbar} />
        <div className='flex flex-wrap justify-between w-full p-8 pb-0 items-center max-w-6xl mx-auto'>
          {/* logo */}
          <h1 className='font-bold text-xl md:text-2xl'>SP<span className='text-[#8c55ff] text-[25px]'>.</span><span className='text-secondary'>_</span></h1>
          {/* menu mobile */}
          <div className='mt-2 z-10 w-6 h-5 flex items-center text-3xl cursor-pointer group '>
            <button 
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <HiX className='group-hover:translate-x-1 transition-all ease-in-out duration-300 text-heading'  />
              ) : (
                <HiMenuAlt3 className='group-hover:translate-x-1 transition-all ease-in-out duration-300 text-heading'  />
              )}
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar