import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { UserdataComponent } from './userdata/userdata.component';
import { PipePipe } from './pipe.pipe';
import { ActionComponent } from './action/action.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ManagerComponent,
    RegisterComponent,
    UserloginComponent,
    ManagerloginComponent,
    UserdashboardComponent,
    ManagerdashboardComponent,
    UserdataComponent,
    PipePipe,
    ActionComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
