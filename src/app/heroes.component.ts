import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
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
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
