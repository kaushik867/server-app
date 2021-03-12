import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { ServererrorComponent } from './servererror/servererror.component';



@NgModule({
  declarations: [NotfoundComponent, ServererrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NotfoundComponent,
    ServererrorComponent
  ]
})
export class ErrorModule { }
