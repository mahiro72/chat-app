import React from 'react'
import Log from './Log'

const Logs = (props) => {
  return (
    <div className="container mx-auto px-4 sm:px-24 w-full p-6 overflow-y-auto h-[40rem]">
        <ul className="space-y-2">
            {props.logs.map((log,idx)=>{
                    return <Log key={idx} log={log} />
            })}
            {/* <li class="flex justify-end">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span class="block">Hiiii</span>
                </div>
            </li>
            <li class="flex justify-end">
                <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span class="block">how are you?</span>
                </div>
            </li> */}
        </ul>
    </div>
  )
}

export default Logs
