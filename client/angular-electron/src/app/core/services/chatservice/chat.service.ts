import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
    providedIn: 'root',
  })
export class ChatService {
    
    public connected: boolean = false;

    constructor(private socket: Socket) {

        this.socket.on("login", function(data) {
            console.log('yeah, were logged in')
        
            console.log(data)
            if (data == 'success' ) {
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
   
}