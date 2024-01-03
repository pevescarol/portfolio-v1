import AboutItem from "./AboutItem"
import carIlus from '../../public/assets/car-ilus.svg'
import Image from "next/image"

import rjs from '../../public/assets/tools/react.svg'
import nextjs from '../../public/assets/tools/nextjs.svg'
import node from '../../public/assets/tools/node.svg'

import csharp from '../../public/assets/tools/csharp.svg'
import python from '../../public/assets/tools/python.svg'
import js from '../../public/assets/tools/javascript.svg'
import mysql from '../../public/assets/tools/mysql.svg'
import bs from '../../public/assets/tools/bootstrap.svg'
import tw from '../../public/assets/tools/tailwindcss.svg'
import sql from '../../public/assets/tools/sql-server.svg'
import net from '../../public/assets/tools/dotnetcore.svg'

import pandas from '../../public/assets/tools/pandas.svg'
import numpy from '../../public/assets/tools/numpy.svg'
import tableau from '../../public/assets/tools/tableau.svg'
import scikit from '../../public/assets/tools/scikit.svg'


const skills = [
  {
    title: 'Software Development',
    icon: [{name: 'Python', icon: python}, {name: 'C#', icon: csharp}, {name: 'JavaScript', icon: js},],
    description: 'Skills in both functional and object-oriented programming OOP.',
  },
  {
    title: 'Full-Stack Development',
    icon: [{name: 'React.js', icon: rjs}, {name: 'Next.js', icon: nextjs}, {name: 'Node.js', icon: node}, {name: 'MySQL', icon: mysql}, {name: 'Tailwind', icon: tw}, {name: 'Bootstrap', icon: bs}, {name: 'SQLServer', icon: sql}, {name: '.NET', icon: net}, ], 
    description: 'Passionate about web development with a strong focus on the modern JavaScript tech stack.',
    more: 'Additionally, experienced with .NET and databases like SQL Server and MySQL, providing a versatile skill set for full-stack development.',
  },
  {
    title: 'Data Science',
    icon: [{name: 'Pandas', icon: pandas}, {name: 'Numpy', icon: numpy}, {name: 'Tableau', icon: tableau}, {name: 'ScikitLearn', icon: scikit},],
    description: 'I enjoy analyzing, visualizing data, and applying techniques for problem modeling with Machine Learning.',
  },
]

const AboutSection = () => {
  return (
    <section id="about" className='max-w-7xl mx-auto my-24 md:my-0 px-8 min-h-screen flex items-center justify-center'>
      <div>
        <div className="text-center mb-[76px]">
          <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-heading'>a bit about me<span className='text-[#8c55ff] text-4xl'>.</span></h2>
          <p className="text-subtext text-base md:text-lg mt-6 leading-8 opacity-70 ">
            I am currently studying a degree in Data Science and Artificial Intelligence.
            <br className="hidden md:block" />
            I continuously invest in improving my efficiency through training and new challenges.
            <br className="hidden md:block" /> Here are some of my skills on which I have been working:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-6">
          {skills.map((item, index) => (
            <div key={index}>
              <AboutItem 
                key={index} 
                title={item.title}
                icon={item.icon}
                description={item.description}
                more={item.more}
              />
            </div>
          ))}
        </div>

        {/* <div className="flex items-center justify-center mt-32">
          <Image src={carIlus} alt="" width={250} height={250}/>
        </div> */}
      </div>
      
      {/* <div className="flex flex-col justify-center items-center gap-8">
        <div className='w-full my-2 text-center mb-10'>
          <h2 className='text-[28px] font-bold text-heading tracking-widest mb-4'>A bit about me<span className='text-[#8c55ff] text-[25px]'>.</span></h2>
          <p className="text-subtext md:text-lg leading-7 opacity-70 tracking-tight">I continuously invest in improving my efficiency through training and new challenges.
            Here are some of my skills on which I have been working:
          </p>
        </div>

        <div className="w-full grid md:grid-cols-12 gap-5">
            <div className="grid md:col-span-7 gap-5">
              {skills.map((item, index) => (
                <AboutItem 
                  key={index} 
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                  more={item.more}
                />
              ))}
            </div>

            <div className="mx-auto grid md:col-span-5 items-center mt-16 md:mt-0  ">
              <div className="relative group cursor-pointer">
                <Image src={carIlus} alt="" width={250} height={250}/>
                <span className='flex md:hidden group-hover:flex absolute text-center -right-6 bottom-60 text-sm opacity-30 font-semibold'>
                  <svg className='relative top-[16px] mr-2' width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 1C15.5 1 9 5.5 3 20M3 20L1 13.5M3 20L9 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                    Click for more<br />about me!
                </span> 
              </div>
            </div>
        </div>
      </div> */}

    </section>
  )
}

export default AboutSection