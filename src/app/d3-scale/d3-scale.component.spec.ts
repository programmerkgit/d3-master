import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ScaleComponent } from './d3-scale.component';

describe('D3ScaleComponent', () => {
  let component: D3ScaleComponent;
  let fixture: ComponentFixture<D3ScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3ScaleComponent]
    });
    fixture = TestBed.createComponent(D3ScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
