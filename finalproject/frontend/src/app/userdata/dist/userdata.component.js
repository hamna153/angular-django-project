"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserdataComponent = void 0;
var core_1 = require("@angular/core");
var UserdataComponent = /** @class */ (function () {
    function UserdataComponent(api) {
        this.api = api;
        this.taskDetails = null;
        this.UserValue = {
            'task_id': "",
            'task_name': "",
            'task_status': "",
            'start_time': "",
            'end_time': "",
            'created_date': "",
            'approval_status': "",
            'assigned_manager': "",
            'task_description': ""
        };
        this.gettaskDetails();
    }
    UserdataComponent.prototype.ngOnInit = function () {
    };
    UserdataComponent.prototype.register = function (registerForm) {
        var _this = this;
        this.api.registeruser(registerForm.value).subscribe(function (resp) {
            console.log(resp);
            registerForm.reset();
            _this.gettaskDetails();
        }, function (err) {
            console.log(err);
        });
    };
    UserdataComponent.prototype.gettaskDetails = function () {
        var _this = this;
        this.api.getuser().subscribe(function (resp) {
            console.log(resp);
            _this.taskDetails = resp;
        }, function (err) {
            console.log(err);
        });
    };
    UserdataComponent.prototype.deleteuser = function (item) {
        var _this = this;
        this.api.deleteusers(item.task_id).subscribe(function (resp) {
            console.log(resp);
            _this.gettaskDetails();
        }, function (err) {
            console.log(err);
        });
    };
    UserdataComponent.prototype.edit = function (item) {
        this.UserValue = item;
    };
    UserdataComponent.prototype.updateuser = function () {
        this.api.updateusers(this.UserValue.task_id, this.UserValue).subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
        });
    };
    UserdataComponent = __decorate([
        core_1.Component({
            selector: 'app-userdata',
            templateUrl: './userdata.component.html',
            styleUrls: ['./userdata.component.css']
        })
    ], UserdataComponent);
    return UserdataComponent;
}());
exports.UserdataComponent = UserdataComponent;
