import Image from 'next/image'
import Link from 'next/link'

import {HiCode, HiOutlineEye} from 'react-icons/hi'

const CardProject = ({title, description, image, tags, demo, github}) => {
  return (
    <figure className='group mb-4 flex flex-col gap-3 cursor-pointer'>

      <div className='relative h-36 md:h-52 rounded-xl'>
        <Image src={image} alt='card image' className='object-cover h-full rounded-xl' />
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
          <h3 className='text-lg md:text-xl font-bold group-hover:text-secondary'>{title}</h3>
          <p className="text-text">
            {description}
          </p>
          <ul className='flex gap-2 flex-wrap' aria-label='Technologies used'>
            {tags.map((tag, index) => (
              <li key={index} className='text-xs opacity-70 text-[#8079fd] rounded-full bg-[#8079fd]/10 px-3 py-1 font-medium leading-5'>{tag}</li>
            ))}
          </ul>
      
    </figure>
  )
}

export default CardProject