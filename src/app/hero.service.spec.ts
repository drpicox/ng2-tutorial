/* tslint:disable:no-unused-variable */
import { addProviders, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { HeroService } from './hero.service';

describe('Service: Hero', () => {
  beforeEach(() => {
    addProviders([{provide: Http, useValue: {}}])
    addProviders([HeroService]);
  });

  it('should ...',
    inject([HeroService],
      (service: HeroService) => {
        expect(service).toBeTruthy();
      }));
});
