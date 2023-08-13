import { Component } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-linear-scales',
  template: `
    <h1>Linear Scales</h1>
    <pre>
      <code>
      const scaleFn = d3.scaleLinear()
      .domain([0, 100]) // input range
      .range([20, 100]) // output range
      const a = scaleFn(50) // 0 => 20, 100 => 100, 50 => (20 + 100) / (50 / (0 + 100))
      return a // 60
    </code>
    </pre>
    {{data()}}
  `,
  styleUrls: ['./linear-scales.component.scss']
})
export class LinearScalesComponent {
  data() {
    // mapを返す
    const scaleFn = d3.scaleLinear()
      .domain([0, 100]) // input range
      .range([20, 100]) // output range
    const a = scaleFn(50) // 0 => 20, 100 => 100, 50 => (20 + 100) / (50 / (0 + 100))
    return a
  }
}
