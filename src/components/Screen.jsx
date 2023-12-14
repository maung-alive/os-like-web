import React, { useContext } from 'react'
import { RunningApps } from '../App'

export default function Screen({ children }) {

  let [ processes, setProcesses ] = useContext(RunningApps);

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500' style={{ background: '/wallpaper.jpg' }}>
        {children}

        {processes.filter( i => i.minimized == false ).map(
          process => process.component
        )}
    </div>
  )
}
