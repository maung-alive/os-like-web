
import React, { createContext, useEffect, useState } from 'react'
import Screen from './components/Screen'
import Dock from './components/Dock'
import MenuBar from './components/MenuBar'
import Widgets from './components/Widgets'
import Loading from './components/Loading'
import shutdown from './functions/shutdown'

export const RunningApps = createContext();

export default function App() {

  let [ loading, setLoading ] = useState(true);
  let [ processes, setProcesses ] = useState([]);
  let shutdown_func = shutdown;
  let [ shuttingDown, setShuttingDown ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  if(loading) return <Loading text="Welcome to the Desktop" />
  else if(shuttingDown) return <Loading text="Shutting down..." />

  return (
    <RunningApps.Provider value={[processes, setProcesses]}>
      <Screen shutdown={shutdown_func} setShuttingDown={setShuttingDown}>
        <MenuBar shutdown={shutdown_func} setShuttingDown={setShuttingDown} />

        <Widgets />

        <Dock />
      </Screen>
    </RunningApps.Provider>
  )
}
