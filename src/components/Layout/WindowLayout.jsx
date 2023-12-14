import React from 'react'

export default function WindowLayout() {
  return (
    <div className="w-[750px] h-[460px] rounded-xl bg-slate-200 absolute top-32 left-10">
        
        <div className="absolute top-0 right-0 bg-white w-full grid grid-cols-3">
          <div className="flex p-2 gap-x-3">
              <div className="bg-green-500 p-2 rounded-full"></div>
              <div className="bg-yellow-500 p-2 rounded-full"></div>
              <div className="bg-red-500 p-2 rounded-full"></div>
          </div>

          <div className="text-black text-center font-medium"></div>

          <div className="text-black text-right font-medium pr-3">Windows</div>

        </div>

    </div>
  )
}
