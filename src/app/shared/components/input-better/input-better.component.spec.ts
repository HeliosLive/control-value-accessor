/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputBetterComponent } from './input-better.component';

describe('InputBetterComponent', () => {
  let component: InputBetterComponent;
  let fixture: ComponentFixture<InputBetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
