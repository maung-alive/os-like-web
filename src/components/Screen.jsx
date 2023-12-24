import React, { useContext, useRef, useState } from 'react'
import { RunningApps } from '../App'
import ContextMenu from './ContextMenu';

export default function Screen({ children, shutdown, setShuttingDown }) {

  let [ processes, setProcesses ] = useContext(RunningApps);
  
  let contextMenuRef = useRef(null);
  let [ contextMenu, setContextMenu ] = useState({
    show: false,
    top: 0,
    left: 0,
  })

  const contextMenuHandler = (e) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      top: e.pageY,
      left: e.pageX
    });
  }

  const handleMouseDown = (e) => {
    if(contextMenuRef.current.contains(e.target)){
      return;
    } else {
      setContextMenu({
        show: false
      })
    }
  }

  return (
    <div
      className='w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'
      style={{ background: '/wallpaper.jpg' }}
      onMouseDown={(e) => handleMouseDown(e)}
      onContextMenu={e => contextMenuHandler(e)}
    >
        {children}

        {
          contextMenu.show &&
          <ContextMenu
            shutdown={shutdown}
            setShuttingDown={setShuttingDown}
            contextMenuRef={contextMenuRef}
            top={contextMenu.top}
            left={contextMenu.left}
          />
        }

        {processes.filter( i => i.minimized == false ).map(
          process => process.component
        )}
    </div>
  )
}
