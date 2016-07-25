import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {

  addingHero: boolean = false;
  error: any;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

  getHeroes() {
    this.heroService.getHeroes().then(heros => this.heroes = heros);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
