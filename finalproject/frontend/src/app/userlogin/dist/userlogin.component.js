"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserloginComponent = void 0;
var core_1 = require("@angular/core");
var UserloginComponent = /** @class */ (function () {
    // publicuser!: string;
    //publicpassword!:string;
    //errtrue;
    function UserloginComponent(angularService, router) {
        this.angularService = angularService;
        this.router = router;
    }
    UserloginComponent.prototype.ngOnInit = function () {
    };
    //LoginUser(){
    //if(this.user == "user" && this.password == "pass", this.err=!this.err)
    //{
    // alert ("Wrong credentials");
    // }
    //else {
    // alert ("Welcome");
    // this.router.navigateByUrl('/userdashboard')
    //}
    UserloginComponent.prototype.onsubmit = function (item) {
        console.log(item);
        if (item.name == "user" && item.password == 'user') {
            console.log(this.router);
            this.router.navigate(['userdashboard']);
        }
        else {
            window.alert("username or password doesnot match");
        }
    };
    UserloginComponent = __decorate([
        core_1.Component({
            selector: 'app-userlogin',
            templateUrl: './userlogin.component.html',
            styleUrls: ['./userlogin.component.css']
        })
    ], UserloginComponent);
    return UserloginComponent;
}());
exports.UserloginComponent = UserloginComponent;
