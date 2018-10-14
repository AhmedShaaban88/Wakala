import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaHomeComponent } from './villa-home.component';

describe('VillaHomeComponent', () => {
  let component: VillaHomeComponent;
  let fixture: ComponentFixture<VillaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
