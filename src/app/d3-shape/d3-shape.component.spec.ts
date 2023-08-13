import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ShapeComponent } from './d3-shape.component';

describe('D3ShapeComponent', () => {
  let component: D3ShapeComponent;
  let fixture: ComponentFixture<D3ShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3ShapeComponent]
    });
    fixture = TestBed.createComponent(D3ShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
