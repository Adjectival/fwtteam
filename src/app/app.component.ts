import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  property: string;
  type: string;
}
const HEROES: Hero[] = [
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
  <div *ngIf="selectedHero"
    style="background:skyblue;">
    <h1>{{selectedHero.name}}</h1>
    <h2>{{selectedHero.property}}</h2>
    <h2>{{selectedHero.type}}</h2>
  </div>
  <ul class="m-2 p-2 list-unstyled list-group">
    <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero===selectedHero"
      class="list-group-item flex-row justify-content-around m-2 p-2 bg-faded">
      <h4><span class="badge badge-default">{{hero.id}}</span></h4>
      <h2>{{hero.name}}</h2>
      <label>prop: </label><input [(ngModel)]="hero.property" placeholder="property">
      <h2>{{hero.type}}</h2>
    </li>
  </ul>`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
  `]
})
export class AppComponent {
  title = 'FWT Team Builder';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
