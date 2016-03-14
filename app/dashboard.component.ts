import {Component, OnInit} from "angular2/core"
import {Hero} from "./hero"
import {HeroService} from "./hero.service"

@Component({
  selector: "my-dashboard",
  templateUrl: "app/dashboard.component.html"
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = []

  constructor(private _heroservice: HeroService){}

  ngOnInit(){
    this._heroservice.getHeroes().then((heroes) => this.heroes = heroes.slice(1,5))
  }

  gotoDetail(hero: Hero){}
}
