import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  public username: string = 'Devashish';
  public updateInput(event:any): void {
    this.username = event.target.value;
  }
}
