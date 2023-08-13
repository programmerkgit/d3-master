import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3ScaleRoutingModule } from './d3-scale-routing.module';
import { D3ScaleComponent } from './d3-scale.component';
import { LinearScalesComponent } from './linear-scales/linear-scales.component';
import { OrdinalScalesComponent } from './ordinal-scales/ordinal-scales.component';


@NgModule({
  declarations: [
    D3ScaleComponent,
    LinearScalesComponent,
    OrdinalScalesComponent
  ],
  imports: [
    CommonModule,
    D3ScaleRoutingModule
  ]
})
export class D3ScaleModule { }
