import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';

import {Socket} from "socket.io";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron: ElectronService, private sock: Socket) { 
   this.sock("http://localhost")

  } 
 
  connectServer(data) {
    this.socket.on('connected', function (data) {
    console.log(data);
    
    this.socket.emit('chatmsg', { username: uname, pw: passwd });
    }
  }

  ngOnInit(): void { }

  closeWindow() {
    this.electron.bwindow.close();
  }

  minimizeWindow() {
    this.electron.bwindow.minimize();
  }
}
