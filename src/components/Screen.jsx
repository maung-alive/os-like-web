import React from 'react'

export default function Screen({ children }) {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500' style={{ background: '/wallpaper.jpg' }}>
        {children}
    </div>
  )
}
