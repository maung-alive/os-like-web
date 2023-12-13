
import React from 'react'
import Screen from './components/Screen'
import Dock from './components/Dock'
import MenuBar from './components/MenuBar'

export default function App() {
  return (
    <Screen>
      <MenuBar />
      <Dock />
    </Screen>
  )
}
