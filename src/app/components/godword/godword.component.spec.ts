import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodwordComponent } from './godword.component';

describe('GodwordComponent', () => {
  let component: GodwordComponent;
  let fixture: ComponentFixture<GodwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
