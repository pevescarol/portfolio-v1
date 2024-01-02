import Link from 'next/link'
import {FiLinkedin, FiMail} from 'react-icons/fi'
import {BiLogoTelegram} from 'react-icons/bi'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Image from 'next/image'
import carIlus from '../public/assets/car-ilus.svg'

const Contact = () => {
  return (
    <section id='contact' className='max-w-7xl mx-auto my-24 px-8 '>
      

      <div className='flex items-center justify-center flex-col md:flex-row text-center py-20 rounded-xl bg-hero-b bg-center bg-cover text-white'>
        <div className="">
          <Image src={carIlus} alt="" width={200} height={200}/>
        </div>
        <div>
        <h3 className="text-3xl md:text-5xl tracking-wide text-subtext  font-semibold">
          Get in Touch.
        </h3>
        {/* <p className='text-text text-sm md:text-xl pt-2'>So that we can talk more about . . .</p> */}
        
        <div className='flex items-center justify-center gap-4 text-2xl mt-8 opacity-70'>
          <Link href="mailto:scpeves@gmail.com" className='group'>
            <FiMail className='group-hover:scale-125 transition' />
          </Link>
          <Link href="https://t.me/cpeves" target='_blank' className='group'>
            <BiLogoTelegram className='group-hover:scale-125 transition' />
          </Link>
          <Link href="https://www.linkedin.com/in/speves/" target='_blank' className='group'>
            <AiFillLinkedin className='group-hover:scale-125 transition' />
          </Link>
          <Link href="https://github.com/pevescarol/" target='_blank' className='group'>
            <AiFillGithub className='group-hover:scale-125 transition' />
          </Link>
          
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact