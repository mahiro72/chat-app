import { useState,useEffect } from 'react';
import Logs from './components/Logs';
import Socket from './socket/socket';
import './styles/App.css'
import Title from './components/Title';
import Forms from './components/forms/Forms';

function App() {

    const [logs, setLogs] = useState([]);
    const [userName, setUserName] = useState("user "+Math.floor(Math.random() * 10**7));

    let ws = new WebSocket("ws://localhost:8080/ws");
    let socket = new Socket(ws);

    useEffect(() => {
        // connect, disconnect, message eventの追加
        socket.on("connect",onConnect);
        socket.on("disconnect",onDisConnect);
        socket.on("message",receiveMessage);

    }, []);

    const onConnect = ()=>{
        setLogs(logs => [...logs, {name:"notice",body:"onConnect."}]);
    };

    const onDisConnect = ()=>{
        setLogs(logs => [...logs,  {name:"notice",body:"onDisconnect."}]);
    };

    const receiveMessage = (log)=>{
        setLogs(logs => [...logs, log]);
    };

    return (
        <div className="App mx-auto">
            <Title userName={userName}/>
            <Logs logs={logs} userName={userName} />
            <Forms userName={userName} setUserName={setUserName} socket={socket}/>
        </div>
    );
}

export default App;
