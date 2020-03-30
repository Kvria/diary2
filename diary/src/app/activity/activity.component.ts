import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  Activity = [
    new activity(1,'Attending a business meeting'),
    new activity(2,'Go to the office'),
    new activity(3,'Reply to emails'),
    new activity(4,'go for shopping'),
    new activity(5,'Go for school event'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
