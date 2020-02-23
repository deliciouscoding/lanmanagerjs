import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, SidebarRoutingModule]
})
export class SidebarModule {}
