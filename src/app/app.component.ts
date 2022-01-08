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
    }
  `]
})
export class AppComponent {
  title = 'angular-udemy-assignment-3';
  displayContent = false;
  count = 0
  clicks : number[] = []

  toggleDisplay() {
    this.count++
    this.clicks.push(this.count)
    console.log(this.clicks)
    if (this.displayContent){
      this.displayContent = false
    } else {
      this.displayContent = true
    }
  }
}
