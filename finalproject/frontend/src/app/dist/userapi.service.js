"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserapiService = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserapiService = /** @class */ (function () {
    function UserapiService(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/user/';
        // login form input field validation
        this.RegisterForm = new forms_1.FormGroup({
            'fullName': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[A-Za-z][A-Za-z ]+$")]),
            'userName': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[A-Za-z][A-Za-z ]+$"), forms_1.Validators.minLength(4)]),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")]),
            'userId': new forms_1.FormControl('', [forms_1.Validators.required]),
            'department': new forms_1.FormControl('', [forms_1.Validators.required]),
            'designation': new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    UserapiService.prototype.getUser = function () {
        return this.http.get(this.url);
    };
    UserapiService.prototype.getUserById = function (pk) {
        return this.http.get(this.url + pk);
    };
    UserapiService.prototype.postUsers = function (newUserDetails) {
        return this.http.post(this.url, newUserDetails);
    };
    UserapiService.prototype.updateUserById = function (pk, data) {
        return this.http.put(this.url + pk, data);
    };
    UserapiService.prototype.deleteUserById = function (pk) {
        return this.http["delete"](this.url + pk);
    };
    UserapiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserapiService);
    return UserapiService;
}());
exports.UserapiService = UserapiService;
