import Link from 'next/link'
import {FiLinkedin, FiMail} from 'react-icons/fi'
import {BiLogoTelegram} from 'react-icons/bi'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='max-w-screen-lg mx-auto py-16 px-6 lg:px-24'>
      <div className='flex flex-col items-center text-center py-20 rounded-xl bg-hero-b bg-center bg-cover text-white'>
        <h3 className="text-[32px] tracking-wide text-subtext  font-semibold">
          Get in Touch.
            {/* Let’s build <br className='hidden md:block' />
            a project together */}
        </h3>
        <p className='text-text text-[12px] pt-2'>So that we can talk more about . . .</p>
        
        <div className='flex items-center justify-center gap-4 text-xl mt-8 opacity-70'>
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
    </section>
  )
}

export default Contact