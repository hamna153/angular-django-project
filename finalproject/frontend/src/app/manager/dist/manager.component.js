"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerComponent = void 0;
var core_1 = require("@angular/core");
var ManagerComponent = /** @class */ (function () {
    function ManagerComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [75, 49, 89, 31, 86, 35, 50], label: 'Progress' },
            { data: [48, 38, 65, 39, 66, 17, 80], label: 'deterioration' }
        ];
        this.lineChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.lineChartData = [
            { data: [75, 49, 89, 31, 85, 35, 50], label: 'Hamna' },
            { data: [48, 38, 66, 39, 66, 17, 80], label: 'Ayesha' },
            { data: [55, 46, 80, 61, 82, 21, 60], label: 'Lekshmi' },
            { data: [65, 59, 48, 62, 55, 26, 40], label: 'Amal' },
            { data: [88, 81, 40, 37, 83, 19, 70], label: 'Anandhu' },
        ];
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = __decorate([
        core_1.Component({
            selector: 'app-manager',
            templateUrl: './manager.component.html',
            styleUrls: ['./manager.component.css']
        })
    ], ManagerComponent);
    return ManagerComponent;
}());
exports.ManagerComponent = ManagerComponent;
