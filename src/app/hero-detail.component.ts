import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template:`
    <div *ngIf="hero"
      class="card m-3 p-2"
      style="background:skyblue;">
      <h1>{{hero.name}}</h1>
      <h2>{{hero.property}}</h2>
      <h2>{{hero.type}}</h2>
    </div>`,
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
//# sourceMappingURL=hero-detail.component.js.map
