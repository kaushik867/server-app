import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';
import { DbComponent } from './db/db.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatabaseinfoComponent } from './databaseinfo/databaseinfo.component';
import { ScriptinfoComponent } from './scriptinfo/scriptinfo.component';
import { ErrorModule } from '../error/error.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    LoginComponent,
    DbComponent,
    DatabaseinfoComponent,
    ScriptinfoComponent,
    LoaderComponent
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
