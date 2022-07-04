import React, { useState } from 'react'

const UserForm = (props) => {
    const [newUserName,setNewUserName] = useState(props.userName);

    // const setStorageUserName = ()=>{
    //     localStorage.setItem('userName',newName);
    // }

    return (
        <div 
            className='my-4 text-gray-600'
            style={{
                "width":"350px",
            }}
        >
            Your Name : &nbsp;
            <input 
                type="text" 
                placeholder="Name"
                className="outline-none"
                style={{"width":"100px"}}
                name="name" 
                required
                value={newUserName}
                onChange={(e)=>{setNewUserName(e.target.value)}}

            />
            <button
                className="bg-transparent hover:bg-blue-200 text-blue-400 font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
                onClick={()=>{props.setUserName(newUserName)}}
                disabled={!newUserName}
            >
                change
            </button>
        </div>
  )
}

export default UserForm