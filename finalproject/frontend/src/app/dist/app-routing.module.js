"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_component_1 = require("./user/user.component");
var userlogin_component_1 = require("./userlogin/userlogin.component");
var managerlogin_component_1 = require("./managerlogin/managerlogin.component");
var userdashboard_component_1 = require("./userdashboard/userdashboard.component");
var userdata_component_1 = require("./userdata/userdata.component");
var managerdashboard_component_1 = require("./managerdashboard/managerdashboard.component");
var routes = [
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "user", component: user_component_1.UserComponent },
    { path: "userlogin", component: userlogin_component_1.UserloginComponent },
    { path: "managerlogin", component: managerlogin_component_1.ManagerloginComponent },
    { path: "userdashboard", component: userdashboard_component_1.UserdashboardComponent },
    { path: "managerdashboard", component: managerdashboard_component_1.ManagerdashboardComponent },
    { path: "userdata", component: userdata_component_1.UserdataComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
