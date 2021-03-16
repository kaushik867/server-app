import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseinfoComponent } from './server/databaseinfo/databaseinfo.component';
import { DbComponent } from './server/db/db.component';
import { LayoutComponent } from './server/layout/layout.component';
import { LoginComponent } from './server/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'db', component: DbComponent},
  {path: 'db/info/:database', component:DatabaseinfoComponent},
  {path: 'db/layouts/:database/:layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
