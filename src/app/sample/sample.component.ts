import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-sample',
  template: `
    <h2>Bar Chart</h2>
    <figure id="bar"></figure>
  `,
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar") // figure#barを選択
      .append("svg") // svg要素を追加
      .attr("width", this.width + (this.margin * 2)) // svgにpropertyを追加
      .attr("height", this.height + (this.margin * 2))
      .append("g") // svgの内側にgを追加
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);
    // x.bandWidth() => 棒1個の幅
    // x(Vue) => Vueの棒グラフの開始地点
    // this.height - y(d.Starts) = 全体の高さから、yの開始地点を引いた残り
    // y(16000) => y= 4000 (上から少し)

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x)) // https://d3js.org/d3-selection/control-flow#selection_call
      // axisBottom => scale generator https://d3js.org/d3-axis#axisBottom
      .selectAll("text") // defaultでtext要素が付与
      .attr("transform", "translate(-10,0)rotate(-45)") // horizontal by default, so set diagonal
      .style("text-anchor", "end"); // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    const append = (d: any[] = []) => {
      this.svg.selectAll("rect") // search any name elements, and not found. // https://binyamin.medium.com/d3-select-selectall-data-enter-and-exit-f0e4f0d3e1d0
        // https://d3js.org/d3-selection/joining#selection_join
        .data(data.concat(d).concat(d))
        .enter()
        .append("rect")
        .attr("x", (d: any) => x(d.Framework))
        .attr("y", (d: any) => y(d.Stars))
        .attr("width", x.bandwidth())
        .attr("height", (d: any) => this.height - y(d.Stars))
        .attr("fill", "#d04a35")
    }
    // update : 更新データ
    // enter : 新規データ
    // exit : 削除データ
    // https://qiita.com/sand/items/91fd2a40a7c651c9dd9c
    // https://d3js.org/d3-selection/joining#selection_join
    append()
    this.svg.selectAll("rect") // search any name elements, and not found. // https://binyamin.medium.com/d3-select-selectall-data-enter-and-exit-f0e4f0d3e1d0
      // https://d3js.org/d3-selection/joining#selection_join
      .data(data.slice(1, 3).concat([{},{"Framework": "Ember", "Stars": "213712", "Released": "2011"},]) )
      .join() // identity https://d3js.org/d3-selection/joining#selection_data
      .attr("x", (d: any) => x(d.Framework)!)
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Stars))
      .attr("fill", "#d04a35")
  }
}
