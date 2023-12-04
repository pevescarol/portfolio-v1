import Image from 'next/image'
import React from 'react'

const AboutItem = ({title, icon, description, more}) => {
  return (
    <div className='select-none bg-[#16141f6b] hover:border hover:border-solid hover:border-secondary hover:bg-[#231f31ce] hover:-translate-y-2 transform transition p-5 rounded-xl'>
      {/* <div className='text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div> */}
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
    </div>
  )
}

export default AboutItem