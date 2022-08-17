"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var PublicService = /** @class */ (function () {
    function PublicService(http) {
        this.http = http;
        this.apiRoot = 'http://127.0.0.1:8000/';
    }
    PublicService.prototype.getItems = function () {
        return this.http.get(this.apiRoot.concat('task/')).pipe(rxjs_1.map((function (res) {
            return res;
        })));
    };
    PublicService.prototype.postData = function (data) {
        return this.http.post(this.apiRoot.concat('task/'), data).pipe(rxjs_1.map((function (res) {
            return res;
        })));
    };
    PublicService.prototype.deleteItems = function (task_id) {
        return this.http["delete"](this.apiRoot.concat('task/') + task_id);
    };
    PublicService.prototype.deleteData = function (id) {
        return this.http["delete"](this.apiRoot.concat('task/') + id).pipe(rxjs_1.map((function (res) {
            return res;
        })));
    };
    PublicService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PublicService);
    return PublicService;
}());
exports.PublicService = PublicService;
