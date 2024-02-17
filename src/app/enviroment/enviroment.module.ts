import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {ChatComponent} from '../chat/chat.component';
import {TreeViewComponent} from '../tree-view/tree-view.component';

@NgModule({
  declarations: [
    EnviromentComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    TreeViewComponent,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }