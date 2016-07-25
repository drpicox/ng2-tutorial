/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';

describe('Component: Heroes', () => {
  it('should create an instance', () => {
    let component = new HeroesComponent({} as HeroService, {} as Router);
    expect(component).toBeTruthy();
  });
});
