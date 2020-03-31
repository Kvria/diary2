import { Component } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'diary';
  
  Activity = [
    new Activity(1,'Attending a business meeting','preparation for the business event next week'),
    new Activity(2,'Go to the office','make sure the packages were delivered'),
    new Activity(3,'Send to emails','for inviting investors to the event'),
    new Activity(4,'go for shopping','buy bread, milk and meat for supper'),
    new Activity(5,'Go for school event','Nicoles prize giving day'),
  ];
    myActivity = this.Activity[0];

    <app-Activity></app-Activity>
    
}