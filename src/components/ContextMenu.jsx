import React from 'react'
import { FaCopy, FaCut, FaInfoCircle, FaPaste, FaPowerOff, FaSort, FaSync, FaTh } from 'react-icons/fa'

export default function ContextMenu({ shutdown, setShuttingDown, contextMenuRef, top, left }) {
  return (
    <div
        ref={contextMenuRef}
        className="fixed z-50 py-2 px-2 bg-gray-100 rounded shadow-md w-[300px]"
        style={{
            top: `${top}px`,
            left: `${left}px`,
        }}
    >
        <div className='flex items-center justify-left gap-x-3 px-2 py-1'>
            <FaCopy className='text-black hover:text-gray-500 text-lg' />
            <FaCut className='text-black hover:text-gray-500 text-lg' />
            <FaPaste className='text-black hover:text-gray-500 text-lg' />
        </div>
        <hr className='border-gray-300' />
        <div className='mt-2'>
            <button className="flex items-center gap-x-2 text-black text-md font-ubuntu w-full text-left hover:bg-gray-300 hover:text-gray-500 px-2 py-1 my-1 rounded">
                <FaTh /> View
            </button>
            <button className="flex items-center gap-x-2 text-black text-md font-ubuntu w-full text-left hover:bg-gray-300 hover:text-gray-500 px-2 py-1 my-1 rounded">
                <FaSort /> Sort
            </button>
            <button className="flex items-center gap-x-2 text-black text-md font-ubuntu w-full text-left hover:bg-gray-300 hover:text-gray-500 px-2 py-1 my-1 rounded">
                <FaSync /> Refresh
            </button>
            <button className="flex items-center gap-x-2 text-black text-md font-ubuntu w-full text-left hover:bg-gray-300 hover:text-gray-500 px-2 py-1 my-1 rounded">
                <FaInfoCircle /> About PC
            </button>
            <button className="flex items-center gap-x-2 text-black text-md font-ubuntu w-full text-left hover:bg-gray-300 hover:text-gray-500 px-2 py-1 my-1 rounded" onClick={() => shutdown(setShuttingDown)}>
                <FaPowerOff /> Shutdown
            </button>
        </div>
    </div>
  )
}
