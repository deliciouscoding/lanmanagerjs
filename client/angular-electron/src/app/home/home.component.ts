import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron: ElectronService) { 
  } 
 
  /*
  connectServer(data) {
    this.sock.on('connected', function (data) {
    console.log(data);
    
    this.socket.emit('chatmsg', { data });
    })
  }
*/
  ngOnInit(): void { }

  closeWindow() {
    this.electron.bwindow.close();
  }

  minimizeWindow() {
    this.electron.bwindow.minimize();
  }
}
