import {Component} from '@angular/core';
import * as d3 from "d3"

@Component({
  selector: 'app-lines',
  template: `
    <h2>svg:path.d</h2>
    <svg style="width: 100%; height: 1000px">
      <g stroke="red" fill="none">
        <path [attr.d]="getLine()"></path>
        <ng-container *ngFor="let c of data">
          <circle r="15" [attr.cx]="c.x" [attr.cy]="c.y"></circle>
        </ng-container>
      </g>
    </svg>
  `,
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent {
  data = [{x: 200, y: 50}, {x: 800, y: 300}, {x: 0, y: 0}]

  i = 0

  circleCenters = this.data

  getLine() {
    const line = d3.line<{ x: number, y: number }>()
      .x(d => d.x)
      .y(d => d.y)
    // px
    // 始点はx=200, y = 50から。
    // 親要素からはみ出たら見えなくなる。絶対値
    console.log("called", this.i++)
    return line(this.data)
  }
}
