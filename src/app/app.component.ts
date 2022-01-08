import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .hide{
      display: none;
    }
    .blue{
      background: blue;
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'angular-udemy-assignment-3';
  displayContent = false;
  clicks : number[] = []

  toggleDisplay() {
    this.clicks.push(this.clicks.length + 1)
    this.displayContent = !this.displayContent
  }
}
