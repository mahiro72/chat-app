import {EventEmitter} from 'events'

export default class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()){
        this.ws = ws;
        this.ee = ee;

        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
        ws.onerror = this.error.bind(this);
    };

    on(eName, fn){
        this.ee.on(eName, fn);
    };

    off(eName,fn){
        this.ee.removeListener(eName, fn);
    };

    open(){
        this.ee.emit('connect');
    };

    close(){
        this.ee.emit('disconnect');
    };

    error(err){
        console.log("web socket error : ",err);
    };

    emit(data) {
        this.ws.send(data)
    }

    message(e){
        try{
            this.ee.emit("message",{type:"message",body:e})
        }
        catch(err){
            this.ee.emit('error',err)
            console.log(Date().toString()+" : ",err)
        }
    }
}