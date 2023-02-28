import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public squares = new Array(364);
  public colorSelected = 'red';

  public fill(ev: any) {
    ev.target.style.background = this.colorSelected;
  }
}
