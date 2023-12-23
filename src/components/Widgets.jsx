import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import useSound from 'use-sound';

function AnimatedCPU() {
  let [ height, setHeight ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight(height.map(i => Math.random() * 100))
    }, 400)

    return () => clearInterval(interval)
  }, [height])

  return (
    <div className="flex items-end gap-x-2 justify-left h-[160px]">
      {height.map(i => <div style={{ height: i + '%' }} className="p-1 bg-red-700"></div>)}
    </div>
  )
}

const MusicPlayer = () => {

  const [play, { pause }] = useSound('/song.mp3');
  let [ playing, setPlaying ] = useState(false);

  return (
    <Draggable>
      <div className="w-full p-3 relative">
        <img src="/song-cv.png" alt="song" className="absolute top-1/2 left-7 shadow-md rounded-md -translate-y-1/2 z-20 w-[90px] h-[125px] object-cover" />
        <div className="font-ubuntu pl-32 bg-slate-100 scale-100 rounded-t-xl p-3 pb-2">
          <p className="text-xl">About you</p>
          <p className="text-md text-gray-800">The 1975</p>
        </div>
        <div className="relative z-10 bg-white scale-x-110 scale-y-110 pl-24 py-3 shadow-xl flex items-center justify-around rounded-md">
          <span className="text-gray-800 text-2xl bg-white rounded-full p-2">
            <FaStepBackward />
          </span>
          <span className="text-gray-800 text-2xl bg-white rounded-full p-2" onClick={() => { playing ? pause() : play(); setPlaying(!playing) }}>
            {
              playing
              ? <FaPause />
              : <FaPlay />
            }
          </span>
          <span className="text-gray-800 text-2xl bg-white rounded-full p-2">
            <FaStepForward />
          </span>
        </div>
      </div>
    </Draggable>
  )
}

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

      <div className="mb-5 w-full bg-[rgba(226,232,240,0.6)] shadow-md rounded-lg pt-3 px-3">
        <p className="text-2xl pb-3 font-bold font-ubuntu">Resource Monitor</p>
        <AnimatedCPU />
        <div className="text-md text-gray-800 flex justify-around">
          <span>CPU 26%</span>
          <span>RAM 48%</span>
          <span>GPU 0%</span>
          <span>32mbps/21mbps</span>
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}
