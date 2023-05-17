import { Component } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent {
  public message: string = '';
  public maxCharCount:number = 200;
}
