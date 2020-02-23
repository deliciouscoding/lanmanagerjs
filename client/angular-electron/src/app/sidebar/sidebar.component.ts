import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    menutitle: string = 'Menu'

    settitle(val:string) {
        this.menutitle = val;
    }

    constructor() {}
    ngOnInit(){

    }
}