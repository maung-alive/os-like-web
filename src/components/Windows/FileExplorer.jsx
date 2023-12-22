import React, { useState } from 'react'
import WindowLayout from '../Layout/WindowLayout'
import { FaBox, FaCamera, FaCameraRetro, FaDesktop, FaDownload, FaFile, FaFileAlt, FaFileAudio, FaFolder, FaGreaterThan, FaImage, FaNetworkWired, FaSearch, FaServer, FaSlash, FaSpaceShuttle, FaTextHeight, FaUser, FaUsers, FaWpexplorer } from 'react-icons/fa'

let dl_data = [
    {
        icon: <FaFileAudio className="text-4xl text-yellow-600 cursor-pointer" />,
        name: "001.ogg"
    },
    {
        icon: <FaImage className="text-4xl text-red-600 cursor-pointer" />,
        name: "download.jpg"
    }
]
let home_data = [
    {
        icon: <FaDesktop className="text-4xl text-blue-600 cursor-pointer" />,
        name: "Desktop"
    },
    {
        icon: <FaFolder className="text-4xl text-blue-600 cursor-pointer" />,
        name: "Downloads"
    },
]

const Folder = ({ setView, path=[], files }) => {
    return (
        <>
            <div className="py-2 bg-white">
                <p className="text-md font-medium text-blue-600 p-2 rounded-md flex items-center gap-x-2">
                    <FaServer className='cursor-pointer' />{path.map(i => <><FaGreaterThan /> {i}</>)}
                </p>
            </div>

            <div className="h-full grid grid-cols-7 grid-rows-6 p-2">
                {Array.isArray(files) ? files.map( i => {
                    return (
                        <div className="" key={i.name} onClick={() => setView(<Folder setView={setView} path={['root', 'home', 'Desktop']} files={{}} />)}>
                            {i.icon}
                            <p className="text-md">{i.name}</p>
                        </div>
                    )
                }) : <></>}
            </div>
        </>
    )
}


const Root = ({ setView }) => (
    <>
        <div className="py-2 bg-white">
            <p className="text-md font-medium text-blue-600 p-2 rounded-md flex items-center gap-x-2">
                <FaServer className='cursor-pointer' /><FaGreaterThan />
            </p>
        </div>

        <div className="h-full grid grid-cols-7 grid-rows-6 p-2">

            <div onClick={() => setView(<Folder setView={setView} path={['boot']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">boot</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['bin']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">bin</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['dev']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">dev</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['etc']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">etc</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['lib']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">lib</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['home']} files={home_data} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">home</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['mnt']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">mnt</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['media']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">media</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['opt']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">opt</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={null} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">root</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['tmp']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">tmp</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['sbin']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">sbin</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['usr']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">usr</p>
            </div>
            <div onClick={() => setView(<Folder setView={setView} path={['var']} files={{}} />)}>
                <FaFolder className="text-4xl text-blue-600 cursor-pointer" />
                <p className="text-md">var</p>
            </div>
            <div onClick={() => setView(null)} className="">
                <FaFileAlt className="text-4xl text-gray-600 cursor-pointer" />
                <p className="text-md">readm<br />e.txt</p>
            </div>

        </div>
    </>
)


export default function FileExplorer({id}) {

    let [ view, setView ] = useState();


    return (
        <WindowLayout id={id} windowTitle={'Files'} width={750} height={460} >

            <div className="w-full shadow-sm mt-6 bg-gray-100 border-b px-2 flex items-center justify-between">
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
                    <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2 cursor-pointer"><FaUsers /> Users</p>
                    <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2 cursor-pointer" onClick={() => setView(<Folder setView={setView} path={['home', 'Downloads']} files={dl_data} />)}><FaDownload /> Downloads</p>
                    <div className="border-b my-2 border-green-900"></div>
                    <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2 cursor-pointer" onClick={() => setView(<Root setView={setView}/>) }><FaServer /> root</p>
                    <p className="text-md bg-cyan-50 font-medium p-2 mb-2 rounded-md flex items-center gap-x-2 cursor-pointer" onClick={() => setView(<Folder setView={setView} path={['network']} files={{}} />)}><FaNetworkWired /> Networks</p>
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

                <div className="h-full overflow-y-auto">
                    { view ?? <Root setView={setView} /> }
                </div>
            </div>

        </WindowLayout>
    )
}
