import Link from "next/link"

const MobileNav = ({open, setOpen}) => {
  return (
    <div 
      className={`absolute top-0 left-0 bottom-0 right-0 w-full h-screen text-center flex items-center justify-center bg-body transform ${open ? '-translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out `}
    >
      <ul>
        <li className="p-4 font-bold text-2xl md:text-4xl lg:text-6xl text-subtext hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#a8c0ff] via-[#8f5cff] to-[#7303c0] hover:duration-300  ">
          <Link href='/'  onClick={() => setOpen(!open)}>Home</Link>
        </li>
        <li className="p-4 font-bold text-2xl md:text-4xl lg:text-6xl text-subtext hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#a8c0ff] via-[#8f5cff] to-[#7303c0] hover:duration-300">
          <Link href='#about'  onClick={() => setOpen(!open)}>About</Link>
        </li>
        <li className="p-4 font-bold text-2xl md:text-4xl lg:text-6xl text-subtext hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#a8c0ff] via-[#8f5cff] to-[#7303c0] hover:duration-300">
          <Link href='#projects' onClick={() => setOpen(!open)}>Projects</Link>
        </li>
        <li className="p-4 font-bold text-2xl md:text-4xl lg:text-6xl text-subtext hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#a8c0ff] via-[#8f5cff] to-[#7303c0] hover:duration-300 ">
          <Link href='#contact' onClick={() => setOpen(!open)}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav