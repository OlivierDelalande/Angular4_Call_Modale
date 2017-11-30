import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModaleComponent } from './common-modale.component';

describe('CommonModaleComponent', () => {
  let component: CommonModaleComponent;
  let fixture: ComponentFixture<CommonModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
