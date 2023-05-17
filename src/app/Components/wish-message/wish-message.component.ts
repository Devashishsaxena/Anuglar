import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent {
  public Message: string = "Devashish";
  
  public saveGoodMorning(): void {
    this.Message = "Good Morning";
  }
  public saveGoodAfternoon(): void {
    this.Message = "Good Afternoon";
  }
  public saveGoodNight(): void {
    this.Message = "Good Night";
  }
}
