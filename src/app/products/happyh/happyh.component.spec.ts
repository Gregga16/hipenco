import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyhComponent } from './happyh.component';

describe('HappyhComponent', () => {
  let component: HappyhComponent;
  let fixture: ComponentFixture<HappyhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
