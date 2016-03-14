import {Component} from "angular2/core"
import {Hero} from "./hero"

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}}</h2>
    <div>
       <label>id:</label>{{hero.id}}
    </div>
    <div>
       <label>name:</label>
       <div>
         <input [(ngModel)]="hero.name" placeHolder="name"/>
       </div>
    </div>
  <div>`,
  inputs: ["hero"]
})
export class HeroDetailComponent{
  hero: Hero
}
