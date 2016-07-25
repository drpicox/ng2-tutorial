/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { HeroSearchService } from './hero-search.service';

describe('Service: HeroSearch', () => {
  beforeEach(() => {
    addProviders([{provide: Http, useValue: {}}])
    addProviders([HeroSearchService]);
  });

  it('should ...',
    inject([HeroSearchService],
      (service: HeroSearchService) => {
        expect(service).toBeTruthy();
      }));
});
