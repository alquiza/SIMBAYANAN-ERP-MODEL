import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnterpriseComponent } from './main-enterprise.component';

describe('MainEnterpriseComponent', () => {
  let component: MainEnterpriseComponent;
  let fixture: ComponentFixture<MainEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
