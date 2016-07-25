import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private hereosUrl = 'app/heroes'; // URL to web api

  constructor(
    private http: Http
  ) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.hereosUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id): Promise<Hero> {
    return this.getHeroes().then(
      heroes => heroes.find(h => h.id === id)
    );
  }

  handleError(x) {
    console.log('error found', x);
    return Promise.reject(x);
  }

}
