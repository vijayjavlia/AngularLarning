import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingcomponentComponent } from './twowaybindingcomponent.component';

describe('TwowaybindingcomponentComponent', () => {
  let component: TwowaybindingcomponentComponent;
  let fixture: ComponentFixture<TwowaybindingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
