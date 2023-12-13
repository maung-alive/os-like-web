import React from 'react'

export default function Screen({ children }) {
  return (
    <div className='w-screen h-screen bg-cover bg-gray-600'>
        {children}
    </div>
  )
}
