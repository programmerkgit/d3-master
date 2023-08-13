import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {D3ShapeComponent} from "../d3-shape/d3-shape.component";
import {D3ScaleComponent} from "./d3-scale.component";
import {LinearScalesComponent} from "./linear-scales/linear-scales.component";
import {OrdinalScalesComponent} from "./ordinal-scales/ordinal-scales.component";

const routes: Routes = [
  {
    path: "", component: D3ScaleComponent, children: [
      {path: "linear-scales", component: LinearScalesComponent},
      {path: "ordinal-scales", component: OrdinalScalesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3ScaleRoutingModule {
}
