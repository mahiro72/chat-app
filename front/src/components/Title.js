import React from 'react'

const Title = (props) => {
  return (
    <div class=" border-b border-gray-300">
        <div className='max-w-6xl flex items-center p-3 mx-auto justify-between'>
            <span class=" text-2xl px-4 sm:px-24 ml-2 font-bold text-gray-600 py-4">
                Welcome to Chat App 🎉
            </span>
            <div>
                <p className='text-xl text-gray-600'>
                    hello, {props.userName}
                </p>
            </div>

        </div>


    </div>
  )
}

export default Title