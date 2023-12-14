import React from 'react'

export default function Dock() {
  return (
    <div className="fixed left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[60px] p-1 rounded-2xl flex justify-evenly bg-[rgba(255,255,255,0.4)] border border-white">
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="border-r"></div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">
          <img src="/terminal.png" alt="Terminal" className="w-full h-full" />
        </div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
        <div className="py-3 px-4 text-gray-900 duration-150 hover:bg-gray-500 hover:rounded-2xl">H</div>
    </div>
  )
}
