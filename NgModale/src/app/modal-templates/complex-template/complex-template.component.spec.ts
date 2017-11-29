import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleCtrl } from './complex-template.component';

describe('ComplexTemplateComponent', () => {
  let component: ModaleCtrl;
  let fixture: ComponentFixture<ModaleCtrl>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleCtrl ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleCtrl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
