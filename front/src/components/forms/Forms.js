import React from 'react'
import SendForm from './SendForm'
import UserForm from './UserForm'

const Forms = (props) => {
  return (
    <div 
        style={{
            "position":"absolute",
            "bottom":0,
        }}
        className=" w-full p-3 border-t border-gray-300"
    >
        <div className='max-w-6xl mx-auto px-4 sm:px-24 my-4 sm:my-12 items-center justify-between'>
            <UserForm userName={props.userName} setUserName={props.setUserName}/>
            <SendForm userName={props.userName} socket={props.socket} />
        </div>

    </div>
  )
}

export default Forms