
import React from 'react'
import Screen from './components/Screen'
import Dock from './components/Dock'
import MenuBar from './components/MenuBar'
import Widgets from './components/Widgets'

export default function App() {
  return (
    <Screen>
      <MenuBar />

      <Widgets />

      <Dock />
    </Screen>
  )
}
