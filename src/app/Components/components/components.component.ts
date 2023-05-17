import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  title = 'Ayush &';
  public tourName: string = "Devashish"
  public tourImages: string = "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  public time: string = new Date().toLocaleTimeString();
  constructor() {
    this.UpdateTime();
  }
  public getDate(): string {
    return new Date().toLocaleDateString();

  }
  // public getTime():string 
  // {
  //   return new Date().toLocaleTimeString();

  // }
  public UpdateTime(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000)

  }
}
