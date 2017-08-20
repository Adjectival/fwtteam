"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FWT Team Builder';
        this.hero = {
            id: 1,
            name: 'Momo',
            property: 'rock',
            type: 'attack',
            terrain: 'field',
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'fwt-tb',
        template: "\n  <div class=\"row\">\n    <h1 class=\"display-4 col\">{{title}}</h1><div class=\"col\"><h4>property</h4>\n      <i class=\"em em-gem\"></i> Rock\n      <i class=\"em em-page_facing_up\"></i> Paper\n      <i class=\"em em-scissors\"></i> Scissors\n</div>\n      <div class=\"col\">\n    <h4>type</h4>\n      <i class=\"em em-eight_spoked_asterisk\"></i> A.Attack\n      <i class=\"em em-large_orange_diamond\"></i> Attack\n      <i class=\"em em-arrows_counterclockwise\"></i> Balance\n      <i class=\"em em-large_blue_circle\"></i> Defense\n      <i class=\"em em-heart_decoration\"></i> Support</div>\n  </div>\n  <div class=\"card m-2 p-2 bg-success\">\n    <h3>{{hero.id}}</h3>\n    <h2>{{hero.name}}</h2>\n    <label>prop: </label><input [(ngModel)]=\"hero.property\" placeholder=\"property\">\n    <h2>{{hero.type}}</h2>\n    <h2>{{hero.terrain}}</h2>\n  </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map