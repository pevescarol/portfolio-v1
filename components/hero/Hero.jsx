import Image from 'next/image'
import heroImg from '../../public/assets/h-bg.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {PiArrowSquareOutBold} from 'react-icons/pi'

const Hero = () => {
  return (
    <section className='h-screen flex items-center justify-center relative'>
      <Image src={heroImg} alt='' className='absolute -z-20 top-0 w-full h-full object-cover object-center aria-hidden min-w-[500px]' />
      <div className='max-w-screen-lg w-full px-6 lg:px-24 '>
        <div className='w-[80%] md:w-3/5'>
          <div className='flex flex-col items-start'>
            <p><span className='text-secondary'>&#60;</span> Hello, I&#8217;m <span className='text-secondary'>/&#62;</span></p>
            <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide mt-2'>Sthepany<br />Peves</h1>
          </div>
          <p className='mt-8  text-xl md:text-2xl text-text font-light leading-normal'>I am a self-taught 
            <span className='text-[#8079fd]'> full-stack </span> 
            developer who also makes 
            <span className='text-[#8079fd]'> data science </span> 
            stuff.
          </p>

          {/* socials */}
          <div className='flex items-center w-full mt-8 justify-start'>
            <ul className='flex gap-x-2'>
              <li className='mr-4 md:text-lg group'>
                <a href="https://linkedin.com/in/speves" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                  <AiFillLinkedin className='text-xl'/> <span className=''>Linkedin</span> <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                </a>
              </li>
              <li className='md:text-lg group'>
                <a href="https://github.com/pevescarol" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                  <AiFillGithub className='text-xl' /> <span className=''>Github</span> <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero