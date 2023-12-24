import React, { useEffect, useState } from 'react'

import ResourceMonitor from './Widgets/ResourceMonitor';
import MusicPlayer from './Widgets/MusicPlayer';


export default function Widgets() {
  let [ time, setTime ] = useState(Date.now());

  useEffect( () => {
    const timeInterval = setInterval(() => setTime(Date.now()), 100)
    return () => clearInterval(timeInterval)
  }, [time])

  return (
    <div className="w-full max-w-[400px] h-[600px] fixed top-1/2 -translate-y-1/2 right-6 lg:right-3">
      <div className="font-orbitron w-full bg-[rgba(226,232,240,0.6)] shadow-md rounded-lg p-3 my-3">
        <p className="font-medium text-gray-700">{Date().split(' ')[1]} {Date().split(' ')[2]}</p>
        <span className="text-6xl font-bold">
          {Date().split(' ')[4]}
        </span>
        <p className="text-gray-800 text-right text-md">
          {time.toString()}
        </p>
      </div>

      <ResourceMonitor />

      <MusicPlayer />
    </div>
  )
}
