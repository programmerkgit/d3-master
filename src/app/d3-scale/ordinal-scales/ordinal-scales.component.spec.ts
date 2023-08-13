import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalScalesComponent } from './ordinal-scales.component';

describe('OrdinalScalesComponent', () => {
  let component: OrdinalScalesComponent;
  let fixture: ComponentFixture<OrdinalScalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinalScalesComponent]
    });
    fixture = TestBed.createComponent(OrdinalScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
