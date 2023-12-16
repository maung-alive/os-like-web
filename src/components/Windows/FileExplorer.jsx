import React from 'react'
import WindowLayout from '../Layout/WindowLayout'
import { FaBox, FaCamera, FaCameraRetro, FaDesktop, FaDownload, FaNetworkWired, FaSearch, FaSpaceShuttle, FaUser, FaUsers } from 'react-icons/fa'

export default function FileExplorer({id}) {
  return (
    <WindowLayout id={id} windowTitle={'Files'} width={750} height={460} >

        <div className="shadow-sm mt-6 bg-gray-100 border-b px-2 flex items-center justify-between">
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
            <div className="h-full bg-gray-300 p-2">
                <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2"><FaUsers /> Users</p>
                <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2"><FaDownload /> Downloads</p>
                <div className="border-b my-2 border-green-900"></div>
                <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2"><FaDesktop /> Computer</p>
                <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2"><FaNetworkWired /> Networks</p>
                <div className="border-b my-3 border-green-900"></div>

                <div className="bg-white py-4 px-2 rounded-md">
                    <p className="flex items-center justify-left gap-x-2 my-2">
                        <FaSpaceShuttle /> <span className="font-medium">Free spaces</span>
                    </p>

                    <div className="w-full flex">
                        <div className="w-full h-full py-1 bg-gradient-to-r from-fuchsia-600 to-blue-600"></div>
                        <div className="py-1 w-[27%] bg-black"></div>
                    </div>

                    <div className="text-md font-medium flex items-center justify-between">
                        <span>73% Used</span>
                        <span>27% Free</span>
                    </div>
                </div>

            </div>

            <div className="h-full px-2">
                Hello
            </div>
        </div>

    </WindowLayout>
  )
}
