"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/do");
var CreateService = /** @class */ (function () {
    function CreateService(_http) {
        this._http = _http;
    }
    CreateService.prototype.getWorkoutCategorys = function () {
        return this._http.get("http://localhost:9081/workouttracker/category/getcategorys")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CreateService.prototype.addWorkoutCollection = function (workoutCollectionVO) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost:9081/workouttracker/workoutcollection/create", workoutCollectionVO, options).map(this.extractData).do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CreateService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CreateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CreateService);
    return CreateService;
}());
exports.CreateService = CreateService;
//# sourceMappingURL=create.service.js.map