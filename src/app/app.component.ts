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
  <h1 class="display-4">{{title}}</h1>
  <div class="card m-2 p-2 bg-success">
    <h3>{{hero.id}}</h3>
    <h2>{{hero.name}}</h2>
    <h2>{{hero.property}}</h2>
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
