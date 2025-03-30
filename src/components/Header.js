import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between m-4 p-4 bg-black text-white'>
        <div>
            <h1>Header</h1>
        </div>
        <nav className='flex justify-between w-[200px] '>
            
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
        </nav>

        
    </div>
  )
}

export default Header