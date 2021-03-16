import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';
import { DbComponent } from './db/db.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatabaseinfoComponent } from './databaseinfo/databaseinfo.component';
import { ErrorModule } from '../error/error.module';
import { LoaderComponent } from './loader/loader.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    DbComponent,
    DatabaseinfoComponent,
    LoaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ErrorModule
  ],
  exports:[
    
  ]
})
export class ServerModule { }
