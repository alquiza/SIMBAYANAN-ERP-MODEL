import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHumanComponent } from './main-human.component';

describe('MainHumanComponent', () => {
  let component: MainHumanComponent;
  let fixture: ComponentFixture<MainHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
