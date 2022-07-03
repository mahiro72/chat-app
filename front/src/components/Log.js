import React from 'react'

const Log = ({
    key:key,
    log:log
}) => {
  return (
    <>
        <li className="flex justify-start" key={key}>
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
            <span className="block">{log}</span>
            </div>
        </li>
    </>
  )
}

export default Log
