/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';



describe('Component: Dashboard', () => {
  it('should create an instance', () => {
    let component = new DashboardComponent({} as HeroService, {} as Router);
    expect(component).toBeTruthy();
  });
});
