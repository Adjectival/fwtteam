"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FWT Team Builder';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"row\" style=\"background:papayawhip;\">\n    <h1 class=\"col mx-2\">{{title}}</h1>\n\n    <div class=\"col\">\n      <h4>property</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-gem\"></i> Rock</li>\n        <li><i class=\"em em-page_facing_up\"></i> Paper</li>\n        <li><i class=\"em em-scissors\"></i> Scissors</li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <h4>type</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-eight_spoked_asterisk\"></i> AreaAttack</li>\n        <li><i class=\"em em-large_orange_diamond\"></i> Attack</li>\n        <li><i class=\"em em-arrows_counterclockwise\"></i> Balance</li>\n        <li><i class=\"em em-large_blue_circle\"></i> Defense</li>\n        <li><i class=\"em em-heart_decoration\"></i> Support</li>\n      </ul>\n    </div>\n  </div>\n\n  <my-heroes></my-heroes>\n\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map