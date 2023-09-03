import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { ApiService } from './service/api.service';
import { AllusersComponent } from './allusers/allusers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [AppComponent, AdduserComponent, AllusersComponent, EdituserComponent, UserdetailsComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
