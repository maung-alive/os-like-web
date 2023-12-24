import React from 'react'
import Draggable from 'react-draggable';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import useSound from 'use-sound';
import { useState } from'react';

import AboutYou from '../../assets/aboutyou.mp3';

const MusicPlayer = () => {

    const [play, { pause }] = useSound(AboutYou);
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
            <span className="text-gray-700 cursor-not-allowed text-2xl bg-white rounded-full p-2">
              <FaStepBackward />
            </span>
            <span className="text-gray-800 text-2xl bg-white rounded-full p-2" onClick={() => { playing ? pause() : play(); setPlaying(!playing) }}>
              {
                playing
                ? <FaPause />
                : <FaPlay />
              }
            </span>
            <span className="text-gray-700 cursor-not-allowed text-2xl bg-white rounded-full p-2">
              <FaStepForward />
            </span>
          </div>
        </div>
      </Draggable>
    )
}

export default MusicPlayer