import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LinesComponent} from "./lines/lines.component";
import {D3ShapeComponent} from "./d3-shape.component";

const routes: Routes = [
  {
    path: "", component: D3ShapeComponent,
    children: [
      {path: "lines", component: LinesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3ShapeRoutingModule { }
