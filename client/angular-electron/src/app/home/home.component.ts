import { Component, OnInit } from '@angular/core';
import { ElectronService, ChatService} from '../core/services';

import {Login} from './../_interface/login'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public login$ :Login;
  public msg: string = "undefined";
  public con: boolean;
  
  constructor(private electron: ElectronService, public chat: ChatService) { 
    console.log("init HomeComponent");
    this.login$ = {
      uname : "Username",
      pw : "",
      logged_in: false
    };
  } 

  sendData() {
    this.chat.sendMessage(this.msg);
  }
  
  login()  {
    this.chat.login_({uname: this.login$.uname});
  }

  ngOnInit(): void { 
  }

  closeWindow() {
    this.electron.bwindow.close();
  }

  minimizeWindow() {
    this.electron.bwindow.minimize();
  }
}
