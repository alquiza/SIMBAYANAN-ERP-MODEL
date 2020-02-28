import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHumanComponent } from './read-human.component';

describe('ReadHumanComponent', () => {
  let component: ReadHumanComponent;
  let fixture: ComponentFixture<ReadHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
