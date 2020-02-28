import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssetComponent } from './main-asset.component';

describe('MainAssetComponent', () => {
  let component: MainAssetComponent;
  let fixture: ComponentFixture<MainAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
