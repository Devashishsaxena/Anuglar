import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public count: number = 0;
  constructor() {
  }
  public IncrCounter(): void {
    this.count = this.count + 1;
  }
  public DecCounter(): void {
    this.count = this.count - 1 > 0 ? this.count -1:0;
  }
}

