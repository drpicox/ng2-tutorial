/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';

describe('Component: HeroDetail', () => {
  it('should create an instance', () => {
    let component = new HeroDetailComponent({} as HeroService, {} as ActivatedRoute);
    expect(component).toBeTruthy();
  });
});
