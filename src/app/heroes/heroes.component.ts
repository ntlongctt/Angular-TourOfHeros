import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import * as _ from 'my-lodash';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  hero: Hero = {
    id: 1,
    name: 'Sogoku'
  };
  heroes: Hero[];
  ngOnInit() {
    console.log('init');
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
