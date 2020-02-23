import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
    providedIn: 'root',
  })
export class ChatService {
    
    public connected: boolean = false;

    constructor(private socket: Socket) {

        console.log("chatservice initiated")
        this.socket.on("login", function(data) {
            console.log('yeah, were logged in')
        
            console.log(data)
            if (data.status == 'success' ) {
                console.log("connected!")
                this.connected = true;
            }

        })
     }
 
    login_(data) {
        this.socket.emit("login", data);
    }

    sendMessage(data){
        this.socket.emit("chatmsg", data);
    }

    getconnectedstate(){
        return this.connected;
    }
   
}