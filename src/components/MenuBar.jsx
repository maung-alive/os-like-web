import React from 'react'

export default function MenuBar() {
  return (
    <div className="fixed top-0 left-0 p-1 w-full h-auto bg-[rgba(31,41,55,0.4)] border-b border-gray-700 flex justify-between">
        <div className="flex gap-x-2">
            <span className="text-white font-medium p-1 hover:bg-slate-500 cursor-pointer rounded-lg">Applications</span>
        </div>

        <div className="flex gap-x-3">
            <span className="text-white font-medium p-1">Dec 13 11:11</span>
        </div>

        <div className="flex gap-x-3">
            <span className="text-white font-medium p-1">M</span>
        </div>
    </div>
  )
}
