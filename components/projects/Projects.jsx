'use client'
import {useState} from 'react'
import CardProject from './CardProject'

import {FiArrowRight} from 'react-icons/fi'

import deruta from '../../public/assets/deruta.jpg'
import imgT from '../../public/assets/design.jpg'
import argencoin from '../../public/assets/img-argencoin.jpg'


const projects = [
  {
    title: 'ArgenCoin App',
    tags: ['React', 'Next', 'Tailwind'],
    description: 'View live quotes for cryptocurrencies, in addition to the dollar.',
    demo: '',
    github: 'https://github.com/pevescarol/cotizaciones-dolar-crypto',
    img: argencoin,
  },
  {
    title: 'DeRuta',
    tags: ['React', 'Tailwind'],
    description: 'Practice project of a responsive landing page.',
    demo: 'https://deruta.vercel.app/',
    github: 'https://github.com/pevescarol/DeRuta-web-frontend',
    img: deruta,
  },
  {
    title: 'Strava app',
    tags: ['.NET', 'Javascript'],
    description: 'Aplicacion de entrenamiento',
    demo: 'https://www.google.com',
    github: 'https://www.github.com/pevescarol',
    img: imgT,
  },
  
]




const Projects = () => {
  
  const [itemsToShow, setItemsToShow] = useState(3);

  const numberPerPage = 30
  const showmore = () => {
    const showItem = itemsToShow + numberPerPage
    setItemsToShow(showItem)
  }


  return (
    <section id='projects' className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-6 lg:px-24 my-24'>
        <div className='w-full my-2 text-center mb-16'>
          <h2 className='text-[28px] font-bold text-heading tracking-widest mb-4'>Some projects<span className='text-[#8c55ff] text-[25px]'>.</span></h2>
          <p className="text-subtext md:text-lg leading-7 opacity-70 tracking-tight">I always build projects to learn, experiment, and grow.
          </p>
        </div>
      

      <div className='grid md:grid-cols-3 gap-8 md:gap-4 my-6 items-center '>
          {/* {projects.map((item, index) => ( */}
          {projects.slice(0, itemsToShow).map((item, index) => (
            <CardProject 
              key={index}
              title={item.title} 
              description={item.description}
              image={item.img}
              tags={item.tags}
              github={item.github}
              demo={item.demo}
            />
          ))}
      </div>

      
      <div className='mt-12'>
        {itemsToShow < 3 ? 
          <button onClick={showmore}  className='text-md inline-flex items-center leading-tight font-semibold group' >
            <span className='border-b border-transparent pb-px transition group-hover:border-secondary motion-reduce:transition-none'>
              Load more projects
            </span> 
            <FiArrowRight className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
          </button>
        : ''}
      </div>

    </section>
  )
}

export default Projects