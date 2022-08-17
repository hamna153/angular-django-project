"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ActionComponent = void 0;
var core_1 = require("@angular/core");
var userdata_component_1 = require("../userdata/userdata.component");
var ActionComponent = /** @class */ (function () {
    function ActionComponent(comp, api) {
        this.comp = comp;
        this.api = api;
        this.searchTerm = '';
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent.prototype.action = function (pk) {
        var _this = this;
        console.log(pk);
        this.api.getTaskById(pk).subscribe(function (response) {
            _this.taskById = response;
            console.log(_this.taskById);
            _this.taskByIdCopy = __assign({}, response);
        });
    };
    ActionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.updateusers(this.taskById.task_id, this.taskById).subscribe(function (response) {
            _this.updatedTask = response;
            console.log(_this.updatedTask);
            window.alert("Task action taken successfully");
        });
    };
    ActionComponent = __decorate([
        core_1.Component({
            providers: [userdata_component_1.UserdataComponent],
            selector: 'app-action',
            templateUrl: './action.component.html',
            styleUrls: ['./action.component.css']
        })
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;
