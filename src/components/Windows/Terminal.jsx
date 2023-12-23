import React, { createRef, useEffect, useState } from 'react'
import WindowLayout from '../Layout/WindowLayout'

function readCommand(order, setPrompt) {
    let [ command, args ] = order.split(' ');
    switch(command){
        case "help":
            return <>
                <span className="text-orange-600">Hello!</span><br/>
                This is a <span className="text-green-600">simple</span> <span className="text-red-600">terminal</span> created by <span className="text-yellow-600 font-extrabold">me</span>!<br/>
                If you don't know me, it's okay<br/>
                I don't know you too!<br />
                <span className='text-red-600 bg-gray-950'>What's a suprise~~~</span><br />
                =================================================<br/>
                <span className="text-red-600">[!] Following commands are not really working</span><br />
                <span className="ml-10"></span>cd<br/>
                <span className="ml-10"></span>ping <br />
                =================================================<br/>
                Type "commands" for advlidated commands...
            </>
        case "commands":
            return <>
                =================================================<br/>
                <span className="ml-10"></span>help<br/>
                <span className="ml-10"></span>hola<br/>
                <span className="ml-10"></span>mingalarbar<br/>
                <span className="ml-10"></span>hello<br/>
                <span className="ml-10"></span>hi<br/>
                <span className="ml-10"></span>ls<br/>
                <span className="ml-10"></span>dir<br/>
                <span className="ml-10"></span>cd<br/>
                <span className="ml-10"></span>ping<br/>
                <span className="ml-10"></span>whoami<br/>
                <span className="ml-10"></span>users<br/>
                =================================================
            </>
        case "hola":
        case "mingalarbar":
        case "hello":
        case "hi":
            return <>
                <span className="text-green-400">[*]</span> Welcome root<br />
                <span className="text-green-400">[*]</span> What can i serve for you today
            </>
        case "ls":
        case "dir":
            switch(args){
                case "boot":
                case "bin":
                case "dev":
                case "etc":
                case "lib":
                case "mnt":
                case "media":
                case "opt":
                case "root":
                case "sbin":
                case "usr":
                case "var":
                    return <>
                        <span className="text-blue-600">/{args}</span>: Nothing here
                    </>
                case "home":
                    return <>
                        <span className="text-blue-600">/~</span>:<br/>
                        <span className="text-blue-600">Desktop Downloads</span>
                    </>
                case undefined:
                    return <>
                        <span className="text-blue-600">
                        boot bin dev etc lib home mnt media opt<br />
                        root sbin usr var</span> readme.txt
                    </>
                default:
                    return <>
                        <span className="text-red-600">[!]</span> No such files or folders
                    </>
            }
        case "cd":
            setPrompt("\nroot@localhost:~#")
            break
        case "ping":
            switch(args){
                case undefined:
                    return <>
                    <span className="text-green-600">nowhere</span>:
                    Pong
                </>
                default:
                    return <>
                    <span className="text-green-600">{args}</span>:
                    Pong
                </>
            }
        case "whoami":
            return <>
                Check your ID!
            </>
        case "users":
            return <>
                I didn't count!
            </>
        default:
            return <><span className="text-yellow-400">[?]</span> command not found</>
    }
}

export default function Terminal({ id }) {
    let [ prompt, setPrompt ] = useState(`\nroot@localhost:/#`)
    let [ history, setHistory ] = useState(['Welcome to my terminal!\n']);
    let [ currentLine, setCurrentLine ] = useState('');
    let commandRef = createRef();

    const enterKeyPressed = () => {
        let nextHistory = <>{prompt} {currentLine}<br/>{readCommand(currentLine, setPrompt)}</>
        setHistory([...history, nextHistory]);
        setCurrentLine('');
    }

    const DelKeyPressed = () => {
        console.log(currentLine === prompt);
        if (currentLine.toString() !== prompt.toString()) {
            console.log(currentLine);
            setCurrentLine(currentLine.slice(0, -1));
        }
    }
    
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            enterKeyPressed();
        }
        if (event.which == 8 || event.which == 46) { 
            event.preventDefault();
            DelKeyPressed();
        }
    }

    return (
    <WindowLayout id={id} windowTitle={'Terminal'} width={750} height={460} >
        <div
            className="pt-7 px-2 font-ibm h-full w-full overflow-y-auto pb-4 bg-gray-950 font-bold text-white"
        >
            {history.map(i => <>{i} <br/></>)}
            <div className="flex">
                <p>{prompt}</p>
                <input
                    className="ml-2 block w-full bg-inherit focus:outline-none"
                    ref={commandRef}
                    value={currentLine}
                    autoComplete="off"
                    onKeyDown={onKeyDown}
                    onChange={() => setCurrentLine(commandRef.current.value)}
                ></input>
            </div>
        </div>

    </WindowLayout>
  )
}
