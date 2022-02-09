/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputBadComponent } from './input-bad.component';

describe('InputBadComponent', () => {
  let component: InputBadComponent;
  let fixture: ComponentFixture<InputBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
