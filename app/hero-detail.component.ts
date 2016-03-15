import {Component,OnInit} from "angular2/core"
import {RouteParams} from "angular2/router"
import {Hero} from "./hero"
import {HeroService} from "./hero.service"

@Component({
  selector: 'hero-detail',
  styleUrls:["app/hero-detail.component.css"],
  templateUrl: "app/hero-detail.component.html",
  inputs: ["hero"]
})
export class HeroDetailComponent implements OnInit{
  hero: Hero

  constructor(private _heroservce: HeroService,private _routeParams: RouteParams){}

  ngOnInit(){
    let id = +this._routeParams.get("id")
    this._heroservce.getHero(id).then(hero => this.hero = hero)
  }

  goBack(){
    window.history.back()
  }
}
