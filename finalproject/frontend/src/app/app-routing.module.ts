import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "user", component: UserComponent},
  {path: "userlogin", component: UserloginComponent},
  {path: "managerlogin", component: ManagerloginComponent},
  {path: "userdashboard", component: UserdashboardComponent},
  {path: "managerdashboard", component: ManagerdashboardComponent},
  {path: "userdata", component: UserdataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
