import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './home/dashboard/dashboard.component'
import { UserprofileComponent } from './home/userprofile/userprofile.component';
import { TeachersComponent } from './home/teachers/teachers.component';
import { CoursesComponent } from './home/courses/courses.component';
import { WalletComponent } from './home/wallet/wallet.component';
import { UploadComponent } from './home/upload/upload.component';
import { BoardComponent } from './home/board/board.component';
 
const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'userprofile', component: UserprofileComponent},
  {path:'teachers', component: TeachersComponent},
  {path:'courses', component: CoursesComponent},
  {path:'wallet', component: WalletComponent},
  {path:'upload', component: UploadComponent},
  {path:'board', component: BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
