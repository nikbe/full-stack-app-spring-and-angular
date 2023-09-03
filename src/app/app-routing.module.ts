import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AllusersComponent } from './allusers/allusers.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path:'',
    component:AllusersComponent
  },
  {
    path:'adduser',
    component:AdduserComponent
  },
  {
    path:'user/:id',
    component:UserdetailsComponent
  },
  {
    path:'edit/:id',
    component:EdituserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
