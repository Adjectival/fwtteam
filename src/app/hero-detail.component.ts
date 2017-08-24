import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template:`
    <div *ngIf="hero"
      class="card m-3 p-2"
      style="background:skyblue;">
      <h5>{{hero.name}}</h5>
      <h6>{{hero.property}}</h6>
      <h6>{{hero.type}}</h6>
    </div>`,
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
