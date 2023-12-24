import React from 'react'

export default function Loading({ text }) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-700 to-pink-500 h-screen w-screen flex justify-center items-center">
        <div className="text-center pb-10">
            <img src="/welcome.png" alt="Welcome" className="animate-pulse mb-6 mx-auto w-[200px] h-[200px]" />
            <h1 className="animate-pulse text-white text-4xl font-bold font-ubuntu">{text}</h1>
            <p className="text-md font-orbitron tracking-widest text-gray-300 mt-3">Powered by your browser</p>
        </div>
    </div>
  )
}
