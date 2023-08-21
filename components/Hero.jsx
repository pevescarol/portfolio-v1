
import Link from 'next/link'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FiArrowDownRight} from 'react-icons/fi'

const Hero = () => {
  return (
    <section>
      <div className='max-w-screen-xl w-full h-screen mx-auto md:text-center flex flex-col justify-center px-12 '>
        <p className='font-bold pb-2 md:text-lg text-subtext'>🖖 Hi, I am</p>
        <h1 className='lg:text-7xl text-heading md:text-6xl text-4xl font-bold pt-4 md:py-4 leading-tight'>Sthepany <br className='flex md:hidden' /> Peves</h1>
        <p className='mt-6 text-xl md:text-2xl'>I am self-taught 
          <span className='text-subtext'> full-stack </span> 
          developer who also makes 
          <span className='text-subtext'> data science </span> 
          stuff.
        </p>

        {/* socials */}
        <div className='flex items-center w-full mt-8 md:justify-center'>
          <ul className='flex'>
            <li className='mr-4 md:text-lg'>
              <a href="https://github.com/pevescarol" className='flex items-center' target='_blank'>
                <AiFillLinkedin/> <span className='ml-2'>Linkedin</span>
              </a>
            </li>
            <li className='md:text-lg'>
              <a href="https://github.com/pevescarol" className='flex items-center' target='_blank'>
                <AiFillGithub /> <span className='ml-2'>Github</span>
              </a>
            </li>
          </ul>
        </div>

        {/* btn */}
        <Link href='#projects' className='bg-[#8f48eb] text-subtext w-[150px] md:w-[200px] rounded-md font-bold mt-8 md:mx-auto py-3 flex items-center justify-center '>See Projects <FiArrowDownRight className='ml-2 text-xl' /> </Link>
      </div>
    </section>
  )
}

export default Hero