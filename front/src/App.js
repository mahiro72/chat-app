import { useState,useEffect } from 'react';
import Logs from './components/Logs';
import SendForm from './components/SendForm';
import Socket from './socket/socket';
import './styles/App.css'
import Title from './components/Title';

function App() {

    const [logs, setLogs] = useState([]);

    let ws = new WebSocket("ws://localhost:8080/ws");
    let socket = new Socket(ws);

    useEffect(() => {

        socket.on("connect",onConnect);
        socket.on("disconnect",onDisConnect);
        socket.on("message",receiveMessage);

    }, []);

    const onConnect = ()=>{
        setLogs(logs => [...logs, "onConnect."]);
    };

    const onDisConnect = ()=>{
        setLogs(logs => [...logs, "onDisconnect."]);
    };

    const receiveMessage = (e)=>{
        setLogs(logs => [...logs,e.data]);
    };

    return (
        <div className="App mx-auto">
            <Title/>
            <Logs logs={logs} />
            <SendForm socket={socket}/>
        </div>
    );
}

export default App;
