import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Hero } from '../hero';
import { HeroSearchService } from '../hero-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  searchSubject: Subject<string> = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  search(term: string) { this.searchSubject.next(term); }

  ngOnInit() {
    this.heroes = this.searchSubject
      .asObservable()
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))

      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }



}
