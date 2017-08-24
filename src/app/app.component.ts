import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="row" style="background:papayawhip;">
    <h1 class="col mx-2">{{title}}</h1>

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

  <my-heroes></my-heroes>

  `,
})

export class AppComponent {
  title = 'FWT Team Builder';
}
