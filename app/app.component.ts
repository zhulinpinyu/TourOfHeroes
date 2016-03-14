import {Component} from "angular2/core"
import {HeroService} from "./hero.service"
import {HeroesComponent} from "./heroes.component"

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <h2>{{name}}</h2>
    <my-heroes></my-heroes>
  `,
  directives: [HeroesComponent],
  providers: [HeroService]
})
export class AppComponent{
  public title = "Tour of Heroes!"
  public name = "My Heroes"
}
