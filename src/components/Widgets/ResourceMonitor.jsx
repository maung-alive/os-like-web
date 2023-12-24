import React from 'react';
import { useState, useEffect } from'react';

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

export default function ResourceMonitor() {
  let [ PCinfo, setPCInfo ] = useState({
    cpu: 26,
    ram: 48,
    gpu: 0,
    download: 32,
    upload: 21,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPCInfo({
        cpu: PCinfo.cpu > 0 ? Math.floor(PCinfo.cpu * Math.random()) : 26,
        ram: PCinfo.ram > 0 ? Math.floor(PCinfo.ram * Math.random()) : 48,
        gpu: Math.floor(PCinfo.gpu * Math.random()),
        download: PCinfo.download > 0 ? Math.floor(PCinfo.download * Math.random()) : 32,
        upload: PCinfo.upload > 0 ? Math.floor(PCinfo.upload * Math.random()) : 21,
      })
    }, 400)

    return () => clearInterval(interval)
  }, [PCinfo])

  return (
    <div className="mb-5 w-full bg-[rgba(226,232,240,0.6)] shadow-md rounded-lg pt-3 px-3">
        <p className="text-2xl pb-3 font-bold font-ubuntu">Resource Monitor</p>
        <AnimatedCPU />
        <div className="text-md text-gray-800 flex justify-around">
            <span>CPU {PCinfo.cpu}%</span>
            <span>RAM {PCinfo.ram}%</span>
            <span>GPU {PCinfo.gpu}%</span>
            <span>{PCinfo.download}mbps/{PCinfo.upload}mbps</span>
        </div>
    </div>
  )
}
