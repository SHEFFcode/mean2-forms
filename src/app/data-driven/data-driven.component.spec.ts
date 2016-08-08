/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DataDrivenComponent } from './data-driven.component';

describe('Component: DataDriven', () => {
  it('should create an instance', () => {
    let component = new DataDrivenComponent();
    expect(component).toBeTruthy();
  });
});
