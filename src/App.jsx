
import React, { createContext, useState } from 'react'
import Screen from './components/Screen'
import Dock from './components/Dock'
import MenuBar from './components/MenuBar'
import Widgets from './components/Widgets'
import FileExplorer from './components/Windows/FileExplorer'

export const RunningApps = createContext();

export default function App() {

  let [ processes, setProcesses ] = useState([]);

  return (
    <RunningApps.Provider value={[processes, setProcesses]}>
      <Screen>
        <MenuBar />

        <Widgets />

        <FileExplorer />

        <Dock />
      </Screen>
    </RunningApps.Provider>
  )
}
