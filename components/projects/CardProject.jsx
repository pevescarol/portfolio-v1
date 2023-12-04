import Image from 'next/image'
import Link from 'next/link'

import {HiCode, HiOutlineEye} from 'react-icons/hi'

const CardProject = ({title, description, image, tags, demo, github}) => {
  return (
    <div className='group hover:-translate-y-4 transition-all'>
      <div className='relative h-36 md:h-40 rounded-t-xl'>
        <Image src={image} alt='card image' className='object-cover h-36 md:h-40 rounded-t-xl' />
        <div className='rounded-t-xl overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
          <Link href={github} className='h-14 w-14 mr-2 flex items-center border-2 relative rounded-full border-[#ADB7BE] hover:border-secondary group/link'>
            <HiCode className='h-10 w-10 text-text m-2 cursor-pointer group-hover/link:text-secondary z-1' />
          </Link>

          <Link href={demo} className='h-14 w-14 flex items-center border-2 relative rounded-full border-[#ADB7BE] hover:border-secondary group/link'>
            <HiOutlineEye className='h-10 w-10 text-text m-2 cursor-pointer group-hover/link:text-secondary z-1' />
          </Link>
        </div>
      </div>
      
      {/* text */}
      <div className="py-6 px-4 rounded-b-xl  bg-[#16141f6b]">
          <h3 className='font-semibold text-xl text-heading'>{title}</h3>
          <p className="text-sm text-text">
            {description}
          </p>
          <ul className='flex gap-2 mt-2 flex-wrap' aria-label='Technologies used'>
            {tags.map((tag, index) => (
              <li key={index} className='text-xs rounded-full bg-[#8079fd]/10 text-[#8079fd] px-3 py-1 font-medium leading-5'>{tag}</li>
            ))}
          </ul>
      </div>
      
    </div>
  )
}

export default CardProject