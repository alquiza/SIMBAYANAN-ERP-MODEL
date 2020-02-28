import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHumanComponent } from './update-human.component';

describe('UpdateHumanComponent', () => {
  let component: UpdateHumanComponent;
  let fixture: ComponentFixture<UpdateHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
