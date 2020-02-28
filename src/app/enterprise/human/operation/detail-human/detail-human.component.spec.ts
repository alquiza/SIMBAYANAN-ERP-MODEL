import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHumanComponent } from './detail-human.component';

describe('DetailHumanComponent', () => {
  let component: DetailHumanComponent;
  let fixture: ComponentFixture<DetailHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
