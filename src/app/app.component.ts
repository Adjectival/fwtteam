import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'fwt-tb',
  template: `
  <div class="row" style="background:papayawhip;">
    <h1 class="display-4 col">{{title}}</h1>
    <div class="col">
      <h4>property</h4>
      <ul class="list-unstyled">
        <li><i class="em em-gem"></i> Rock</li>
        <li><i class="em em-page_facing_up"></i> Paper</li>
        <li><i class="em em-scissors"></i> Scissors</li>
      </ul>
    </div>
    <div class="col">
      <h4>type</h4>
      <ul class="list-unstyled">
        <li><i class="em em-eight_spoked_asterisk"></i> AreaAttack</li>
        <li><i class="em em-large_orange_diamond"></i> Attack</li>
        <li><i class="em em-arrows_counterclockwise"></i> Balance</li>
        <li><i class="em em-large_blue_circle"></i> Defense</li>
        <li><i class="em em-heart_decoration"></i> Support</li>
      </ul>
    </div>
  </div>

  <hero-detail [hero]="selectedHero"></hero-detail>

  <ul class="m-2 p-2 list-unstyled list-group">
    <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero===selectedHero"
      class="list-group-item flex-row justify-content-around m-2 p-2 bg-faded">
      <h4><span class="badge badge-default">{{hero.id}}</span></h4>
      <h2>{{hero.name}}</h2>
      <input [(ngModel)]="hero.property" placeholder="property">
      <h2>{{hero.type}}</h2>
    </li>
  </ul>
  `,
  styles: [`
    .selected {
      background-color: orange !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li.selected:hover {
      background-color: orange !important;
      color: white;
    }
    .heroes li:hover {
      color: maroon;
      background-color: ivory;
      left: .1em;
    }
  `],
  providers: [ HeroService ]
})
export class AppComponent implements OnInit{
  title = 'FWT Team Builder';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
