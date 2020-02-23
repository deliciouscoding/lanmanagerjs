import { Component, OnInit } from '@angular/core';
import { ElectronService, ChatService} from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private electron: ElectronService, private chat: ChatService) { 
  
  } 

  sendData() {
    this.chat.sendMessage({ uname: "hans", pw: "peter" });
  }
  

  ngOnInit(): void { }

  closeWindow() {
    this.electron.bwindow.close();
  }

  minimizeWindow() {
    this.electron.bwindow.minimize();
  }
}
