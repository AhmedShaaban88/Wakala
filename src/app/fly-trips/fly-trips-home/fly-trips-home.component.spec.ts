import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyTripsHomeComponent } from './fly-trips-home.component';

describe('FlyTripsHomeComponent', () => {
  let component: FlyTripsHomeComponent;
  let fixture: ComponentFixture<FlyTripsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyTripsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyTripsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
