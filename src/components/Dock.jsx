import React, { useContext } from 'react'
import { FaAddressBook, FaBeer, FaCalculator, FaFacebook, FaFileArchive, FaGithub, FaHome, FaInternetExplorer, FaMailBulk, FaMedium, FaPlaystation, FaSearch, FaSearchDollar, FaSearchengin, FaTerminal, FaVideo, FaWpexplorer } from 'react-icons/fa'
import { RunningApps } from '../App'
import FileExplorer from './Windows/FileExplorer';

export default function Dock() {

  let [ processes, setProcesses ] = useContext(RunningApps);
  const addProcess = (id, name, component, minimized) => {
    setProcesses([
      ...processes,
      {
        id,
        name,
        component,
        minimized
      }
    ])
  }

  return (
    <div className="fixed left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 h-[60px] w-[475px] p-1 rounded-2xl flex items-center justify-evenly bg-[rgba(255,255,255,0.4)] border border-white">
        <button onClick={() => addProcess(Date.now(),"Files", <FileExplorer id={Date.now()} />, false)} className="bg-yellow-300 p-2 rounded-lg duration-150 hover:scale-110" title="Terminal">
          <FaHome className="text-2xl text-black" />
        </button>
        <div className="border-r h-full"></div>
        <button className="bg-black p-2 rounded-lg duration-150 hover:-translate-y-3" title="Terminal">
          <FaTerminal className="text-2xl text-white" />
        </button>
        <button className="bg-cyan-700 p-2 rounded-lg duration-150 hover:-translate-y-3" title="Internet">
          <FaInternetExplorer className="text-2xl text-white" />
        </button>
        <button className="bg-gray-700 p-2 rounded-lg duration-150 hover:-translate-y-3" title="Github profile">
          <FaGithub className="text-2xl text-white" />
        </button>
        <button className="bg-orange-500 p-2 rounded-lg duration-150 hover:-translate-y-3" title="Buy me a beer">
          <FaBeer className="text-2xl text-white" />
        </button>
        <button className="bg-red-500 p-2 rounded-lg duration-150 hover:-translate-y-3" title="Texting to me">
          <FaMailBulk className="text-2xl text-white" />
        </button>
    </div>
  )
}
