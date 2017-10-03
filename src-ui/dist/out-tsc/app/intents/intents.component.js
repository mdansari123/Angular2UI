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
var router_1 = require("@angular/router");
var intent_service_1 = require("../intent.service");
var IntentsComponent = (function () {
    function IntentsComponent(intentService, router) {
        this.intentService = intentService;
        this.router = router;
    }
    IntentsComponent.prototype.getIntents = function () {
        var _this = this;
        this.intentService
            .getIntents()
            .then(function (intents) { return _this.intents = intents; });
    };
    IntentsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.intentService.create(name)
            .then(function (intent) {
            _this.intents.push(intent);
            _this.selectedIntent = null;
        });
    };
    IntentsComponent.prototype.delete = function (intent) {
        var _this = this;
        this.intentService
            .delete(intent.id)
            .then(function () {
            _this.intents = _this.intents.filter(function (h) { return h !== intent; });
            if (_this.selectedIntent === intent) {
                _this.selectedIntent = null;
            }
        });
    };
    IntentsComponent.prototype.ngOnInit = function () {
        this.getIntents();
    };
    IntentsComponent.prototype.onSelect = function (intent) {
        this.selectedIntent = intent;
    };
    IntentsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedIntent.id]);
    };
    return IntentsComponent;
}());
IntentsComponent = __decorate([
    core_1.Component({
        selector: 'app-intents',
        templateUrl: './intents.component.html',
        styleUrls: ['./intents.component.css']
    }),
    __metadata("design:paramtypes", [intent_service_1.IntentService,
        router_1.Router])
], IntentsComponent);
exports.IntentsComponent = IntentsComponent;
//# sourceMappingURL=intents.component.js.map