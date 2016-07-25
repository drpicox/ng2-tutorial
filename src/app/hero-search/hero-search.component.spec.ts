/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Router }            from '@angular/router';
import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchService } from '../hero-search.service';

describe('Component: HeroSearch', () => {
  it('should create an instance', () => {
    let component = new HeroSearchComponent({} as HeroSearchService, {} as Router);
    expect(component).toBeTruthy();
  });
});
