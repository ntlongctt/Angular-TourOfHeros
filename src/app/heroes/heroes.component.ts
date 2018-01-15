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
    // console.log(_.isNil('1'));
  }

  ngAfterContentInit() {
    // console.log('after init');
    // console.log(_.isEmpty(1));
    // console.log(_.isEmptyArray([]));
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

}
