"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var user_component_1 = require("./user/user.component");
var manager_component_1 = require("./manager/manager.component");
var register_component_1 = require("./register/register.component");
var forms_1 = require("@angular/forms");
var userlogin_component_1 = require("./userlogin/userlogin.component");
var managerlogin_component_1 = require("./managerlogin/managerlogin.component");
var userdashboard_component_1 = require("./userdashboard/userdashboard.component");
var managerdashboard_component_1 = require("./managerdashboard/managerdashboard.component");
var ng2_charts_1 = require("ng2-charts");
var userdata_component_1 = require("./userdata/userdata.component");
var pipe_pipe_1 = require("./pipe.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                user_component_1.UserComponent,
                manager_component_1.ManagerComponent,
                register_component_1.RegisterComponent,
                userlogin_component_1.UserloginComponent,
                managerlogin_component_1.ManagerloginComponent,
                userdashboard_component_1.UserdashboardComponent,
                managerdashboard_component_1.ManagerdashboardComponent,
                userdata_component_1.UserdataComponent,
                pipe_pipe_1.PipePipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                ng2_charts_1.NgChartsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
