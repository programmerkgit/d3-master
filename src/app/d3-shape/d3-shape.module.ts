import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinesComponent} from './lines/lines.component';
import {RouterModule} from "@angular/router";
import {D3ShapeComponent} from './d3-shape.component';
import {D3ShapeRoutingModule} from "./d3-shape-routing.module";


@NgModule({
  declarations: [
    LinesComponent,
    D3ShapeComponent
  ],
  imports: [
    CommonModule,
    D3ShapeRoutingModule
  ]
})
export class D3ShapeModule {
}
