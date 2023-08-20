'use client'
import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import MobileNav from './MobileNav'

const Navbar = () => {
  // estado inicial - false
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav className='w-full bg-body fixed top-0 left-0 right-0 z-10 '>
        <MobileNav open={navbar} setOpen={setNavbar} />
        <div className='w-11/12 flex justify-end items-center '>
          {/* logo */}

          {/* menu mobile */}
          <div className='mt-10 z-50 w-6 h-5 flex items-center text-2xl cursor-pointer group '>
            <button 
              className=''
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <HiX className='group-hover:translate-x-1 transition-all ease-in-out duration-300'  />
              ) : (
                <HiMenuAlt3 className='group-hover:translate-x-1 transition-all ease-in-out duration-300'  />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar