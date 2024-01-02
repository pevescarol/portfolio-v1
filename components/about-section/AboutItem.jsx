import Image from 'next/image'
import React from 'react'

const AboutItem = ({title, icon, description, more}) => {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-lg md:text-xl font-bold'>{title}</h3>
      <p className='text-text'>{description}</p>
      <p className='text-sm opacity-30'>{more}</p>
      <div className='flex gap-2'>
        {icon.map((i, index) => (
          <div key={index} className='flex items-center justify-center group relative w-8 h-8 hover:scale-125 duration-75'>
            <Image src={i.icon} alt={i.name} width={24} height={24} className='w-6 h-6' />
            <div className="mt-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 transform -translate-x-1/2 -bottom-4">
              {i.name}
            </div>
          </div>
        ))}
      </div>


      {/* <div className='select-none bg-[#16141f6b] hover:border hover:border-solid hover:border-secondary hover:bg-[#231f31ce] hover:-translate-y-2 transform transition p-5 rounded-xl'>
            <h3 className='font-semibold leading-snug tracking-tight text-subtext mb-1'>{title}</h3>
            <p className='text-sm text-text'>{description}</p>
            <p className='text-[10px] opacity-30 mt-2'>{more}</p>
            <div className='flex gap-2 mt-4'>
              {icon.map((i, index) => (
                <div key={index} className='flex items-center justify-center group relative'>
                  <Image src={i.icon} alt={i.name} width={24} height={24} />
                  <div className="mt-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 transform -translate-x-1/2 -bottom-4">
                    {i.name}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
    </div>
  )
}

export default AboutItem