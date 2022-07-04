import React from 'react'

const Log = ({
    key:key,
    log:log,
    userName:userName
}) => {
    if (log.name==="notice"){
        return (
            <>
                <li className="flex justify-start" key={key}>
                    <div className="relative max-w-xl px-4 py-2 text-gray-800 bg-green-200 rounded shadow">
                    <p className='text-gray-700 text-xs'>notice🔔</p>
                    <span className="block">{log.body}</span>
                    </div>
                </li>
            </>
        )
    }
    else if (log.name===userName){
        return (
            <>
                <li class="flex justify-end" key={key}>
                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <p className='text-gray-700 text-xs'>{log.name}</p>
                    <span class="block">{log.body}</span>
                    </div>
                </li>
            </>
        )
    }
    else {
        return (
            <>
                <li className="flex justify-start" key={key}>
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <p className='text-gray-700 text-xs'>{log.name}</p>
                    <span className="block">{log.body}</span>
                    </div>
                </li>
            </>
        )
    }
}

export default Log
