import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindgameComponent } from './findgame.component';

describe('FindgameComponent', () => {
  let component: FindgameComponent;
  let fixture: ComponentFixture<FindgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
