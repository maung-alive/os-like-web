import classNames from 'classnames';
import React, { useContext, useState } from 'react'
import { FaCog, FaCompass, FaFileExport, FaPowerOff, FaTerminal, FaUser } from 'react-icons/fa'
import { RunningApps } from '../App';

export default function MenuBar() {

    let [ showMenuBar, setShowMenuBar ] = useState(false);
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    const [processes, setProcesses] = useContext(RunningApps);

    const handleShutDown = () => {
        window.open("about:blank", "_self");
        window.close();
    }
  
    return (
        <div className="fixed top-0 left-0 p-1 w-full h-auto bg-[rgba(31,41,55,0.4)] border-b border-gray-700 flex justify-between">
            <div className="flex items-center gap-x-2">
                <button onClick={(e) => setShowMenuBar(!showMenuBar) } className="text-white text-sm font-medium p-1 hover:bg-slate-500 cursor-pointer rounded-lg active:scale-95">Applications</button>
                {processes.map((process, key) => (
                    <button key={key} className="text-white text-sm font-medium p-1 hover:bg-slate-500 cursor-pointer rounded-lg">{process.name}</button> 
                ))}

                <div className={classNames({
                    "absolute z-10 shadow-lg p-3 top-12 left-4 rounded-xl w-[90vw] max-w-[500px] h-[560px] bg-[rgba(255,255,255,0.3)] grid grid-cols-[2fr_3fr] gap-x-1": true,
                    "duration-500": true,
                    "-translate-x-[110%]": !showMenuBar,
                    "translate-x-0": showMenuBar
                })}>
                    <div className="">
                        <p className="text-xl text-slate-900 px-2 my-3 font-medium">Hello Maung!</p>
                        <button className="w-full text-left text-sm text-black hover:text-blue-900 font-medium flex items-center gap-x-3 p-2 my-1 rounded-lg hover:bg-gray-300"><FaCompass /> File Expolorer</button>
                        <button className="w-full text-left text-sm text-black hover:text-blue-900 font-medium flex items-center gap-x-3 p-2 my-1 rounded-lg hover:bg-gray-300"><FaTerminal /> Terminal</button>
                        <button className="w-full text-left text-sm text-black hover:text-blue-900 font-medium flex items-center gap-x-3 p-2 my-1 rounded-lg hover:bg-gray-300"><FaCog /> Settings</button>
                        <button className="w-full text-left text-sm text-black hover:text-blue-900 font-medium flex items-center gap-x-3 p-2 my-1 rounded-lg hover:bg-gray-300"><FaUser /> Creator?</button>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-slate-900 px-2 my-3 font-medium">Recent</p>
                        <button className="w-full text-left text-md text-gray-800 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Terminal</button>
                        <button className="w-full text-left text-md text-gray-800 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Files</button>
                        <button className="w-full text-left text-md text-gray-800 hover:text-gray-900 font-medium p-2 my-1 rounded-lg hover:bg-gray-300">Cherry</button>

                        <button className="absolute bottom-0 right-0 font-bold bg-[#f00] p-2 rounded-full text-white"><FaPowerOff /></button>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-3">
    
            </div>

            <div className="flex items-center gap-x-3">
                <span className="text-white text-sm font-medium p-1">{date}</span>
                <span className="text-white text-sm font-medium p-1">
                    <FaPowerOff />
                </span>
            </div>
        </div>
    )
}
