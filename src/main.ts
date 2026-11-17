import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserItem } from './app/user-item/user-item';

@Component({
  imports: [UserItem],
  selector: 'app-root',
  template: `<app-user-item></app-user-item> `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
