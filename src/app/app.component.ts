import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="card m-2 p-2 bg-faded"><h1 class="display-4">FWT_Team Builder</h1><h2>{{name}}</h2><h3>{{property}}</h3><h3>{{type}}</h3><h3>{{terrain}}</h3></div>`,

})
export class Character {
  name = 'Momo';
  property = 'Rock';
  type = 'Attack';
  terrain = 'Field';
}
