import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ol>
      <li><a routerLink="d3-shape">d3-shape</a></li>
      <li><a routerLink="d3-scale">d3-scale</a></li>
    </ol>
    <app-sample></app-sample>
    <div>style</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd3-master';
}
