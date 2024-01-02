import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {PiArrowSquareOutBold} from 'react-icons/pi'
import {FaChevronDown} from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='h-screen flex items-center justify-center relative '>
      {/* bg hero */}
      <div className='section-hero h-full w-full absolute top-0 -z-20 '></div>
      {/* text */}
      <div className='max-w-7xl p-8 m-auto'>
        <div className='flex-1 items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='block mb-6 text-center'>
              <p className='text-sm md:text-xl'><span className='text-lg'>👋🏻 </span>Hi there, my name is</p>
              <h1 className='text-5xl lg:text-7xl font-semibold leading-tight'>Carol Peves</h1>
            </div>

            <div className='text-xl md:text-2xl lg:text-3xl mb-8 text-center'>
              <p className='leading-tight'>I am a self-taught 
                <em className='text-[#8079fd]'> full-stack </em> 
                developer <br className='hidden md:block' /> who also makes <br className='block md:hidden' />
                <em className='text-[#8079fd]'> data science </em> 
                stuff.
              </p>
            </div>

            <div className='flex items-center w-full my-6 justify-center'>
              <ul className='flex gap-x-2'>
                <li className='mr-4 md:text-2xl group'>
                  <a href="https://linkedin.com/in/speves" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                    <AiFillLinkedin /> <span className='flex flex-row items-center gap-x-1'>Linkedin <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' /></span> 
                  </a>
                </li>
                <li className='md:text-2xl group'>
                  <a href="https://github.com/pevescarol" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                    <AiFillGithub /> <span className='flex flex-row items-center gap-x-1'>Github <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' /></span> 
                  </a>
                </li>
              </ul>
            </div>

            <Link href='#about' className='absolute bottom-32 md:bottom-24'>
              <FaChevronDown className="animate-bounce text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero