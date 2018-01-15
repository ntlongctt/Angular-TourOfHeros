import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements AfterContentInit, OnInit {

  constructor() { }

  // ngOnInit() {
  // }
  hero: Hero = {
    id: 1,
    name: 'Sogoku'
  };

  ngOnInit() {
    console.log('init');
    // console.log(_.isNil('1'));
  }

  ngAfterContentInit() {
    // console.log('after init');
    // console.log(_.isEmpty(1));
    // console.log(_.isEmptyArray([]));
  }

}
