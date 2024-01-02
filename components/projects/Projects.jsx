'use client'
import {useState} from 'react'
import CardProject from './CardProject'

import {FiArrowRight} from 'react-icons/fi'

import coherence from '../../public/assets/coherencia-bg.jpg'
import argencoin from '../../public/assets/img-argencoin.jpg'
import tiendita from '../../public/assets/tiendita.jpg'


const projects = [
  {
    title: 'ArgenCoin App',
    tags: ['react', 'next', 'tailwind', 'api'],
    description: 'View live quotes for the most important cryptocurrencies, in addition to the dollar.',
    demo: '',
    github: 'https://github.com/pevescarol/cotizaciones-dolar-crypto',
    img: argencoin,
  },
  {
    title: 'Ecommerce Store',
    tags: ['react', 'next', 'tailwind'],
    description: 'Virtual store of simple purchase by Whatsapp, with google sheets of database.',
    demo: 'https://www.google.com',
    github: 'https://www.github.com/pevescarol',
    img: tiendita,
  },
  {
    title: 'Meme Generator',
    tags: ['react', 'next', 'tailwind'],
    description: 'App to create memes with image upload and export.',
    demo: '',
    github: 'https://github.com/pevescarol',
    img: coherence,
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
    <section id='projects' className='max-w-7xl mx-auto my-36 md:my-0 px-8 min-h-screen flex items-center justify-center'>
      <div>
        <div className='text-center mb-[76px]'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-heading'>some projects<span className='text-[#8c55ff] text-4xl'>.</span></h2>
          <p className="text-base md:text-lg mt-6 leading-8 opacity-70">I always build projects to learn,<br className='block md:hidden' /> experiment, and grow.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-6'>
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
      </div>

    </section>
  )
}

export default Projects