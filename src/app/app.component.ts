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
  type: 'attack',
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
  <div class="row">
    <h1 class="display-4 col">{{title}}</h1><div class="col"><h4>property</h4>
      <i class="em em-gem"></i> Rock
      <i class="em em-page_facing_up"></i> Paper
      <i class="em em-scissors"></i> Scissors
</div>
      <div class="col">
    <h4>type</h4>
      <i class="em em-eight_spoked_asterisk"></i> A.Attack
      <i class="em em-large_orange_diamond"></i> Attack
      <i class="em em-arrows_counterclockwise"></i> Balance
      <i class="em em-large_blue_circle"></i> Defense
      <i class="em em-heart_decoration"></i> Support</div>
  </div>
  <ul class="flex-row m-2 p-2 list-unstyled">
    <li *ngFor="let hero of heroes" class="card flex-row justify-content-around m-2 p-2 bg-faded">
      <h6>{{hero.id}}</h6>
      <h2>{{hero.name}}</h2>
      <label>prop: </label><input [(ngModel)]="hero.property" placeholder="property">
      <h2>{{hero.type}}</h2>
    </li>
  </ul>`
})
export class AppComponent {
  title = 'FWT Team Builder';
  heroes = HEROES;
}
