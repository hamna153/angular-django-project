"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskapiService = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TaskapiService = /** @class */ (function () {
    function TaskapiService(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/task/';
        this.createTaskForm = new forms_1.FormGroup({
            'taskId': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]*$"),]),
            'taskName': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[A-Za-z][A-Za-z ]+$"),]),
            'taskStatus': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'startTime': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'endTime': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'createdDate': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'approvalStatus': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'assignedManager': new forms_1.FormControl('', [forms_1.Validators.required,]),
            'taskDescription': new forms_1.FormControl('', [forms_1.Validators.required,])
        });
    }
    TaskapiService.prototype.getTask = function () {
        return this.http.get(this.url);
    };
    TaskapiService.prototype.getTaskById = function (pk) {
        return this.http.get(this.url + pk);
    };
    TaskapiService.prototype.postTask = function (newTaskDetails) {
        return this.http.post(this.url, newTaskDetails);
    };
    TaskapiService.prototype.updateTaskById = function (pk, data) {
        return this.http.post(this.url + pk, data);
    };
    TaskapiService.prototype.deleteTaskById = function (pk) {
        return this.http["delete"](this.url + pk);
    };
    TaskapiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskapiService);
    return TaskapiService;
}());
exports.TaskapiService = TaskapiService;
