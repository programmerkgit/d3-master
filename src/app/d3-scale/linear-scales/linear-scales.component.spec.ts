import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearScalesComponent } from './linear-scales.component';

describe('LinearScalesComponent', () => {
  let component: LinearScalesComponent;
  let fixture: ComponentFixture<LinearScalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearScalesComponent]
    });
    fixture = TestBed.createComponent(LinearScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
