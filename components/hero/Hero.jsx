import Image from 'next/image'
import heroImg from '../../public/assets/newbg.jpg'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {PiArrowSquareOutBold} from 'react-icons/pi'

const Hero = () => {
  return (
    <section className='h-[70vh] flex items-center justify-center relative '>
      {/* bg hero */}
      <div className='section-hero h-full w-full absolute top-0 -z-20 '></div>
      {/* text */}
      <div className='max-w-6xl p-32 m-auto'>
        <div className='flex-1 items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='block mb-6 text-center'>
              <span className='text-sm md:text-xl'>👋🏻 Hi there, my name is</span>
              <h1 className='text-5xl md:text-7xl font-semibold leading-tight'>Carol Peves</h1>
            </div>

            <div className='text-2xl md:text-4xl mb-8 text-center'>
              <p className='leading-tight'>I am a self-taught 
                <em className='text-[#8079fd]'> full-stack </em> 
                developer <br className='hidden md:block' /> who also makes 
                <em className='text-[#8079fd]'> data science </em> 
                stuff.
              </p>
            </div>

            <div className='flex items-center w-full mt-6 justify-center'>
              <ul className='flex gap-x-2'>
                <li className='mr-4 md:text-2xl group'>
                  <a href="https://linkedin.com/in/speves" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                    <AiFillLinkedin /> <span className=''>Linkedin</span> <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                  </a>
                </li>
                <li className='md:text-2xl group'>
                  <a href="https://github.com/pevescarol" className='flex items-center gap-x-2 group-hover:text-secondary' target='_blank'>
                    <AiFillGithub /> <span className=''>Github</span> <PiArrowSquareOutBold className='-translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

{/* <div className='w-[80%] md:w-3/5'>
          <div className='flex flex-col items-start'>
            <p>Hi 👋🏻 I&apos;m</p>
            <h1 className='font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide mt-2'>Sthepany<br />Peves</h1>
          </div>
          <p className='mt-4 text-xl md:text-2xl text-text font-light leading-normal'>I am a self-taught 
            <br className='flex md:hidden' /><span className='text-[#8079fd]'> full-stack </span> 
            developer who also makes 
            <span className='text-[#8079fd]'> data science </span> 
            stuff.
          </p>

          
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
       */}