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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'FWT Team Builder';
    }
    AppComponent.prototype.getHeroes = function () {
        this.heroes = this.heroService.getHeroes();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'fwt-tb',
        template: "\n  <div class=\"row\" style=\"background:papayawhip;\">\n    <h1 class=\"display-4 col\">{{title}}</h1>\n    <div class=\"col\">\n      <h4>property</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-gem\"></i> Rock</li>\n        <li><i class=\"em em-page_facing_up\"></i> Paper</li>\n        <li><i class=\"em em-scissors\"></i> Scissors</li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <h4>type</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-eight_spoked_asterisk\"></i> AreaAttack</li>\n        <li><i class=\"em em-large_orange_diamond\"></i> Attack</li>\n        <li><i class=\"em em-arrows_counterclockwise\"></i> Balance</li>\n        <li><i class=\"em em-large_blue_circle\"></i> Defense</li>\n        <li><i class=\"em em-heart_decoration\"></i> Support</li>\n      </ul>\n    </div>\n  </div>\n\n  <hero-detail [hero]=\"selectedHero\"></hero-detail>\n\n  <ul class=\"m-2 p-2 list-unstyled list-group\">\n    <li *ngFor=\"let hero of heroes\"\n      (click)=\"onSelect(hero)\"\n      [class.selected]=\"hero===selectedHero\"\n      class=\"list-group-item flex-row justify-content-around m-2 p-2 bg-faded\">\n      <h4><span class=\"badge badge-default\">{{hero.id}}</span></h4>\n      <h2>{{hero.name}}</h2>\n      <input [(ngModel)]=\"hero.property\" placeholder=\"property\">\n      <h2>{{hero.type}}</h2>\n    </li>\n  </ul>\n  ",
        styles: ["\n    .selected {\n      background-color: orange !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li.selected:hover {\n      background-color: orange !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: maroon;\n      background-color: ivory;\n      left: .1em;\n    }\n  "],
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map