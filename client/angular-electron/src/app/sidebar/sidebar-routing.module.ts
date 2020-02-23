import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../chat/chat.component';
import { GamesComponent } from '../games/games.component';

const routes: Routes = [
    
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule {}
