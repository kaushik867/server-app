import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ServerModule } from './server/server.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorModule } from './error/error.module';
import { HttpinterceptorService } from './services/httpinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ServerModule,
    HttpClientModule,
    ErrorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi:true}
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
