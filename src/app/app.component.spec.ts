/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Ng2Heros', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'Tour of Heroes\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Tour of Heroes');
    }));
});
