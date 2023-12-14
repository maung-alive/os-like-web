import React from 'react'
import WindowLayout from '../Layout/WindowLayout'
import { FaSearch, FaUser } from 'react-icons/fa'

export default function FileExplorer({id}) {
  return (
    <WindowLayout id={id} windowTitle={'Files'} >

        <div className="mt-6 bg-gray-100 border-b px-2 flex items-center justify-between">
            <div className="flex justify-center gap-x-3 py-3">
                <FaUser className="text-2xl text-teal-800" />
                <span className="text-xl font-medium text-teal-800">Maung</span>
            </div>

            <div className="relative">
                <FaSearch className="text-lg absolute top-1/2 -translate-y-1/2 right-3" />
                <input type="text" name="text" id="txt" className="bg-[rgba(0,0,0,0.1)] rounded-lg w-[350px] px-2 py-1 focus:outline-none" />
            </div>
        </div>

        <div className="h-full w-full grid grid-cols-[2fr_4fr]">
            <div className="h-full bg-gray-300">
                <p className="text-lg font-medium py-2 px-1">ShortCuts</p>
            </div>
        </div>

    </WindowLayout>
  )
}
