import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent
{

  public isLoggedIn: boolean = false;
  public LogIn(): void
  {
    this.isLoggedIn = true;
}

  public LogOut(): void
  {
    this.isLoggedIn = false;
}
}
