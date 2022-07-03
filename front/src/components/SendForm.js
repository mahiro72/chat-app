import React,{useState} from 'react'

const SendForm = (props) => {

    const [message, setMessage] = useState("");

    const sendMessage = ()=>{
        props.socket.emit(message)
        setMessage("")
    }

    return (
    <div 
        style={{
            "position":"absolute",
            "bottom":0,
        }}
        className="container mx-auto px-4 sm:px-24 my-4 sm:my-12 flex items-center justify-between w-full p-3 border-t border-gray-300"
    >
        <input 
            type="text" 
            placeholder="Message"
            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message" 
            required
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
        />
        <button 
            type="submit"
            onClick={sendMessage}
            disabled={!message}
        >
            <svg className="w-8 h-8 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
        </button>
    </div>
    )
}

export default SendForm