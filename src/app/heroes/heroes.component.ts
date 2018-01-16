import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements AfterContentInit, OnInit {

  constructor() { }
  hero: Hero = {
    id: 1,
    name: 'Sogoku'
  };
  heroes = HEROES;
  selectedHero: Hero;
  ngOnInit() {
    console.log('init');
  }

  ngAfterContentInit() {
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

}
