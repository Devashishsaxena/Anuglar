import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  templateUrl: './forms-binding.component.html',
  styleUrls: ['./forms-binding.component.css']
})
export class FormsBindingComponent {
  public username: string = "Devashish";

  updateInput($event: any): void
  {
    this.username = $event.target.value;
  }
}
