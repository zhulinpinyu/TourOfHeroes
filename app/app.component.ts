import {Component} from "angular2/core"
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from "angular2/router"
import {HeroService} from "./hero.service"
import {HeroesComponent} from "./heroes.component"

@RouteConfig([{
  path: "/heroes",
  name: "Heroes",
  component: HeroesComponent
}])

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <h2>{{name}}</h2>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService,ROUTER_PROVIDERS]
})
export class AppComponent{
  public title = "Tour of Heroes!"
  public name = "My Heroes"
}
