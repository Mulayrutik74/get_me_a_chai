import React from 'react'

const Footer = () => {

  const currantyear = new Date().getFullYear();

  return (
    <footer className=' flex items-center justify-center bg-blue-950 min-h-[8vh] text-white'>
        <p className='text-center'>copyright &copy; {currantyear} My Website</p>
    </footer>
  )
}

export default Footer
