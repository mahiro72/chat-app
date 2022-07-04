import React from 'react'
import Log from './Log'

const Logs = (props) => {
  return (
    <div className=" max-w-6xl container mx-auto px-4 sm:px-24 w-full p-6 overflow-y-auto h-[40rem]">
        <ul className="space-y-2">
            {props.logs.map((log,idx)=>{
                    return <Log key={idx} log={log} userName={props.userName}/>
            })}
        </ul>
    </div>
  )
}

export default Logs
