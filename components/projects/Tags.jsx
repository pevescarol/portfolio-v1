import React from 'react'

const Tags = ({tag}) => {
  return (
    <li className='rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mb-1'>{tag}</li>
  )
}

export default Tags