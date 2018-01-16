import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import * as _ from 'my-lodash';
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
    console.log(_.isEmptyArray([1]));
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

}
