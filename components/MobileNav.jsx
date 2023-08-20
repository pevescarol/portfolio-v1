import Link from "next/link"

const MobileNav = ({open, setOpen}) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-screen h-screen bg-body transform ${open ? '-translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out `}
    >
      <ul className="flex flex-col justify-center items-center mt-28">
        <li className="my-4">
          <Link href='/'  onClick={() => setOpen(!open)}>_home</Link>
        </li>
        <li className="my-4">
          <Link href='/about'  onClick={() => setOpen(!open)}>_about-me</Link>
        </li>
        <li className="my-4">
          <Link href='/projects' onClick={() => setOpen(!open)}>_projects</Link>
        </li>
        <li className="my-4">
          <Link href='/contact' onClick={() => setOpen(!open)}>_contact-me</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav