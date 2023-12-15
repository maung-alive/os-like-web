import classNames from 'classnames';
import React, { createRef, useContext, useRef, useState } from 'react'
import Draggable from 'react-draggable';
import { RunningApps } from '../../App';

export default function WindowLayout({ children, id, windowTitle }) {

  let [ processes, setProcesses ] = useContext(RunningApps);
  let [ maximum, setMaximum ] = useState(false);
  let windowRef = useRef();

  let killProcess = () => {
    setProcesses(processes.filter(i => i.id != id));
  }

  let makeMaximum = (e) => {
    windowRef.current.style.transform = "";
    setMaximum(!maximum);    
  }

  return (
      <Draggable disabled={maximum} nodeRef={windowRef}>
        <div className={classNames({
          "bg-slate-200 overflow-hidden": true,
          "w-[750px] h-[460px] rounded-xl absolute top-32 left-10": !maximum,
          "fixed top-9 left-0 w-full h-full": maximum
        })} ref={windowRef}>
            
            <div className="mb-3 absolute top-0 right-0 bg-white w-full grid grid-cols-3">
              <div className="flex p-2 gap-x-3">
                  <button title="Doesnt work" className="bg-yellow-500 p-2 rounded-full"></button>
                  <button onClick={(e) => makeMaximum(e)} title="Maxium" className="bg-green-500 p-2 rounded-full"></button>
                  <button onClick={killProcess} title="Close" className="bg-red-500 p-2 rounded-full"></button>
              </div>

              <div className="text-black text-center font-medium"></div>

              <div className="text-black text-right font-medium pr-3">{windowTitle}</div>

            </div>

            <div className="h-full mt-2 overflow-y-auto">
              {children}
            </div>

        </div>
      </Draggable>
  )
}
