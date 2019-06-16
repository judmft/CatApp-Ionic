import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEditPage } from './resource-edit.page';

describe('ResourceEditPage', () => {
  let component: ResourceEditPage;
  let fixture: ComponentFixture<ResourceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
