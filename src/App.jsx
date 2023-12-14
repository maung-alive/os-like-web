
import React from 'react'
import Screen from './components/Screen'
import Dock from './components/Dock'
import MenuBar from './components/MenuBar'
import Widgets from './components/Widgets'
import WindowLayout from './components/Layout/WindowLayout'

export default function App() {
  return (
    <Screen>
      <MenuBar />

      <WindowLayout />
      <Widgets />

      <Dock />
    </Screen>
  )
}
