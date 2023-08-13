import { Component } from '@angular/core';
import * as d3 from "d3"
@Component({
  selector: 'app-d3-scale',
  template: `
    <h1>D3-Scale component</h1>
    <ul>
      <li><a routerLink="linear-scales">linear-scales</a></li>
      <li><a routerLink="ordinal-scales">ordinal-scales</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./d3-scale.component.scss']
})
export class D3ScaleComponent {

}
