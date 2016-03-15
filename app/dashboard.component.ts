import {Component, OnInit} from "angular2/core"
import {Router} from "angular2/router"
import {Hero} from "./hero"
import {HeroService} from "./hero.service"

@Component({
  selector: "my-dashboard",
  styleUrls:["app/dashboard.component.css"],
  templateUrl: "app/dashboard.component.html"
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = []

  constructor(private _heroservice: HeroService,private _router: Router){}

  ngOnInit(){
    this._heroservice.getHeroes().then((heroes) => this.heroes = heroes.slice(1,5))
  }

  gotoDetail(hero: Hero){
    let link = ['HeroDetail',{id: hero.id}]
    this._router.navigate(link)
  }
}
