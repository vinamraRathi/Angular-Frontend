import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop';
  links = [
    { path: '/home', title: 'Home'},
    { path: '/courses', icon: 'view_list' , title: 'Courses'},
  ];

  constructor() {}
}
