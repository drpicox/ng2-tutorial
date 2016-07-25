import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private hereosUrl = 'app/heroes'; // URL to web api

  constructor(
    private http: Http
  ) {}

  delete(hero: Hero): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.hereosUrl}/${hero.id}`;
    return this.http
      .delete(url, {headers})
      .toPromise()
      .catch(this.handleError);
  }

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

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  private handleError(x) {
    console.log('error found', x);
    return Promise.reject(x);
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(this.hereosUrl, JSON.stringify(hero), {headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.hereosUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

}
