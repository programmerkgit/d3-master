import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "d3-shape", loadChildren: () => import("./d3-shape/d3-shape.module").then(v => v.D3ShapeModule)},
  {path: "d3-scale", loadChildren: () => import("./d3-scale/d3-scale.module").then(v => v.D3ScaleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
