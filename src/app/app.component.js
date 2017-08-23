"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
    {
        id: 1,
        name: 'Momo',
        property: 'rock',
        type: 'Attack',
    },
    {
        id: 2,
        name: 'Mu',
        property: 'paper',
        type: 'Balance',
    },
    {
        id: 3,
        name: 'Carrot',
        property: 'paper',
        type: 'Attack',
    },
    {
        id: 4,
        name: 'Deborah',
        property: 'scissors',
        type: 'AreaAttack',
    },
    {
        id: 5,
        name: 'Kai',
        property: 'rock',
        type: 'Balance',
    },
    {
        id: 6,
        name: 'Alfred',
        property: 'rock',
        type: 'AreaAttack',
    },
    {
        id: 7,
        name: 'Lance',
        property: 'scissors',
        type: 'Defense',
    },
    {
        id: 8,
        name: 'Mas',
        property: 'paper',
        type: 'Support',
    },
    {
        id: 9,
        name: 'Ian',
        property: 'rock',
        type: 'Balance',
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FWT Team Builder';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'fwt-tb',
        template: "\n  <div class=\"row\" style=\"background:papayawhip;\">\n    <h1 class=\"display-4 col\">{{title}}</h1>\n    <div class=\"col\">\n      <h4>property</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-gem\"></i> Rock</li>\n        <li><i class=\"em em-page_facing_up\"></i> Paper</li>\n        <li><i class=\"em em-scissors\"></i> Scissors</li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <h4>type</h4>\n      <ul class=\"list-unstyled\">\n        <li><i class=\"em em-eight_spoked_asterisk\"></i> AreaAttack</li>\n        <li><i class=\"em em-large_orange_diamond\"></i> Attack</li>\n        <li><i class=\"em em-arrows_counterclockwise\"></i> Balance</li>\n        <li><i class=\"em em-large_blue_circle\"></i> Defense</li>\n        <li><i class=\"em em-heart_decoration\"></i> Support</li>\n      </ul>\n    </div>\n  </div>\n  <hero-detail [hero]=\"selectedHero\"></hero-detail>\n  <ul class=\"m-2 p-2 list-unstyled list-group\">\n    <li *ngFor=\"let hero of heroes\"\n      (click)=\"onSelect(hero)\"\n      [class.selected]=\"hero===selectedHero\"\n      class=\"list-group-item flex-row justify-content-around m-2 p-2 bg-faded\">\n      <h4><span class=\"badge badge-default\">{{hero.id}}</span></h4>\n      <h2>{{hero.name}}</h2>\n      <input [(ngModel)]=\"hero.property\" placeholder=\"property\">\n      <h2>{{hero.type}}</h2>\n    </li>\n  </ul>",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map