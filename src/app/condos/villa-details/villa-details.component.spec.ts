import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaDetailsComponent } from './villa-details.component';

describe('VillaDetailsComponent', () => {
  let component: VillaDetailsComponent;
  let fixture: ComponentFixture<VillaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
