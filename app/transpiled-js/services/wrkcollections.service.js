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
var WrkCollectionsService = /** @class */ (function () {
    function WrkCollectionsService(_http) {
        this._http = _http;
    }
    WrkCollectionsService.prototype.getWorkoutcollections = function () {
        return this._http.get("http://172.18.2.182:9081/workouttracker/workoutcollection/get")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    WrkCollectionsService.prototype.deleteWorkoutCollection = function (id) {
        return this._http.delete("http://172.18.2.182:9081/workouttracker/workoutcollection/" + id).map(function (response) { return console.log("@#@@#@#" + response.json()); }).do(function (data) { return console.log(JSON.stringify(data)); });
    };
    WrkCollectionsService.prototype.getWkCollectionById = function (id) {
        return this._http.get("http://172.18.2.182:9081/workouttracker/workoutcollection/" + id).map(function (response) { return response.json(); }).do(function (data) { return console.log(JSON.stringify(data)); });
    };
    WrkCollectionsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("response @@@@@@@@@@@@@");
        console.log(res.text());
        console.log(res.status.toString());
        return body || {};
    };
    WrkCollectionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WrkCollectionsService);
    return WrkCollectionsService;
}());
exports.WrkCollectionsService = WrkCollectionsService;
//# sourceMappingURL=wrkcollections.service.js.map