import classNames from 'classnames';
import React, { useState } from 'react'
import { FaPowerOff } from 'react-icons/fa'

export default function MenuBar() {

    let [ showMenuBar, setShowMenuBar ] = useState(false);

    return (
        <div className="fixed top-0 left-0 p-1 w-full h-auto z- bg-[rgba(31,41,55,0.4)] border-b border-gray-700 flex justify-between">
            <div className="flex items-center gap-x-2">
                <button onClick={(e) => setShowMenuBar(!showMenuBar) } className="text-white text-sm font-medium p-1 hover:bg-slate-500 cursor-pointer rounded-lg">Applications</button>
                <div className={classNames({
                    "absolute z-10 border border-white p-3 top-12 left-4 rounded-xl w-[500px] h-[560px] bg-[rgb(75,85,99,0.3)] grid grid-cols-[2fr_3fr] gap-x-1": true,
                    "duration-500": true,
                    "-translate-x-[110%]": !showMenuBar,
                    "translate-x-0": showMenuBar
                })}>
                    <div className="">
                        <p className="text-md text-blue-200 px-2 my-3 font-medium">Hello Maung!</p>
                        <button className="w-full text-left text-sm text-white hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">01 - Information Gathering</button>
                        <button className="w-full text-left text-sm text-white hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">02 - Vulnerability Analysis</button>
                        <button className="w-full text-left text-sm text-white hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">03 - Web App Analysis</button>
                        <button className="w-full text-left text-sm text-white hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">04 - Password Attack</button>
                        <button className="w-full text-left text-sm text-white hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">05 - Reporting</button>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-blue-200 px-2 my-3 font-medium">Recent</p>
                        <button className="w-full text-left text-md text-gray-100 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Terminal</button>
                        <button className="w-full text-left text-md text-gray-100 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Files</button>
                        <button className="w-full text-left text-md text-gray-100 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Cherry</button>

                        <button className="absolute bottom-0 right-0 font-bold text-pink-500">M</button>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-3">
                <span className="text-white text-sm font-medium p-1">Dec 13 11:11</span>
            </div>

            <div className="flex items-center gap-x-3">
                <span className="text-white text-sm font-medium p-1">
                    <FaPowerOff />
                </span>
            </div>
        </div>
    )
}
