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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var intent_service_1 = require("../intent.service");
var IntentDetailComponent = (function () {
    function IntentDetailComponent(intentService, route, location) {
        this.intentService = intentService;
        this.route = route;
        this.location = location;
    }
    IntentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.intentService.getIntent(+params.get('id')); })
            .subscribe(function (intent) { return _this.intent = intent; });
    };
    IntentDetailComponent.prototype.save = function () {
        var _this = this;
        this.intentService.update(this.intent)
            .then(function () { return _this.goBack(); });
    };
    IntentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return IntentDetailComponent;
}());
IntentDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-intent-detail',
        templateUrl: './intent-detail.component.html',
        styleUrls: ['./intent-detail.component.css']
    }),
    __metadata("design:paramtypes", [intent_service_1.IntentService,
        router_1.ActivatedRoute,
        common_1.Location])
], IntentDetailComponent);
exports.IntentDetailComponent = IntentDetailComponent;
//# sourceMappingURL=intent-detail.component.js.map