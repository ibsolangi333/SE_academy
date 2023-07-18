import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserprofileComponent } from './home/userprofile/userprofile.component';
import { TeachersComponent } from './home/teachers/teachers.component';
import { CoursesComponent } from './home/courses/courses.component';
import { WalletComponent } from './home/wallet/wallet.component';
import { UploadComponent } from './home/upload/upload.component';
import { BoardComponent } from './home/board/board.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    UserprofileComponent,
    TeachersComponent,
    CoursesComponent,
    WalletComponent,
    UploadComponent,
    BoardComponent,
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
