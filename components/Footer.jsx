import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center my-16 group text-sm md:text-lg">
      &copy; 2024 · Made with 
      <svg className="inline-block mx-2 group-hover:scale-125 transition cursor-pointer" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6199 1.50427C12.2359 0.837948 10.0071 -1.25552 7.29714 1.06759C6.84128 1.45837 6.14812 1.46726 5.68709 1.08259C2.87404 -1.2645 0.764134 0.836519 0.380045 1.50427C-0.38522 2.85532 0.0737922 4.90074 1.14531 5.88681L5.81013 10.3407C6.19658 10.7096 6.80481 10.7096 7.19126 10.3407L11.8561 5.88681C12.9261 4.90074 13.3851 2.85602 12.6199 1.50427Z" fill="#8079fd"/>
      </svg>
      &
      ☕
      by SCP.
    </footer>
  )
}

export default Footer