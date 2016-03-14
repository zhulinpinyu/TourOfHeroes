import {Component} from 'angular2/core';

interface Hero{
  id: number;
  name: String;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{hero.name}}</h1>
             <h2>{{title}}</h2>
             <div><label>ID:</label>{{hero.id}}</div>
             <div>
                <label>Name:</label>
                <div><input [(ngModel)]="hero.name" placehoder="name"/></div>
             </div>`
})
export class AppComponent{
  public title = "Tour of Heroes!";
  public name = "Demo";

  public hero:Hero = {
    id: 1,
    name: "Window son!"
  }
}
