import React from 'react'

const Log = ({
    key:key,
    log:log
}) => {
    if (log.type==="notice"){
        return (
            <>
                <li className="flex justify-start" key={key}>
                    <div className="relative max-w-xl px-4 py-2 text-gray-800 bg-green-200 rounded shadow">
                    <span className="block">{log.body}</span>
                    </div>
                </li>
            </>
        )
    }
    else if (log.type==="message"){
        return (
            <>
                <li className="flex justify-start" key={key}>
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{log.body}</span>
                    </div>
                </li>
            </>
        )
    }
}

export default Log
