import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  property: string;
  type: string;
  terrain: string;
}
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
  <div class="card m-2 p-2 bg-success">
    <h3>{{hero.id}}</h3>
    <h2>{{hero.name}}</h2>
    <label>prop: </label><input [(ngModel)]="hero.property" placeholder="property">
    <h2>{{hero.type}}</h2>
    <h2>{{hero.terrain}}</h2>
  </div>`
})
export class AppComponent {
  title = 'FWT Team Builder';
    hero: Hero = {
      id: 1,
      name: 'Momo',
      property: 'rock',
      type: 'attack',
      terrain: 'field',
    }
}
