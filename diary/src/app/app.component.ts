import { Component } from '@angular/core';
import { Activity } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'diary';
  
  Activity = [
    new activity(1,'Attending a business meeting'),
    new activity(2,'Go to the office'),
    new activity(3,'Reply to emails'),
    new activity(4,'go for shopping'),
    new activity(5,'Go for school event'),
  ];
    myActivity = this.Activity[0];
    <app-activity></app-activity>
    
}