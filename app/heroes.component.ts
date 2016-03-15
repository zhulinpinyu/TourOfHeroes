import {Component,OnInit} from 'angular2/core'
import {Router} from 'angular2/router'
import {Hero} from "./hero"
import {HeroDetailComponent} from "./hero-detail.component"
import {HeroService} from "./hero.service"

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  styleUrls: ["app/heroes.component.css"],
  templateUrl: "app/heroes.component.html"
})

export class HeroesComponent implements OnInit{
  heroes: Hero[]
  selectedHero: Hero
  constructor(
    private _heroservice: HeroService,
    private _router: Router
  ){}

  getHeroes(){
    this._heroservice.getHeroesSlowly().then((heroes) => this.heroes = heroes )
  }

  ngOnInit(){
    this.getHeroes()
  }

  onSelect(hero: Hero){
    this.selectedHero = hero
  }

  gotoDetail(){
    this._router.navigate(['HeroDetail',{id: this.selectedHero.id}])
  }
}
