import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();

  error: any;
  sub: Subscription;
  navigated: boolean = false; // true if navigated


  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.heroService.getHero(id).then(hero => this.hero = hero);
        this.navigated = true;
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

  save() {
    this.heroService.save(this.hero)
      .then(hero => {
        this.hero = hero;
        this.goBack(hero);
      })
      .catch(error => this.error = error);
  }

}
