import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingEditPage } from './missing-edit.page';

describe('MissingEditPage', () => {
  let component: MissingEditPage;
  let fixture: ComponentFixture<MissingEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
