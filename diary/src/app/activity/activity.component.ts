import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  Activity = [
    new Activity(1,'Attending a business meeting','preparation for the business event next week',new Date(2020,3,14)),
    new Activity(2,'Go to the office','make sure the packages were delivered',new Date(2020,3,18)),
    new Activity(3,'Reply to emails','for inviting investors to the event',new Date(2020,3,14)),
    new Activity(4,'go for shopping','buy bread, milk and meat for supper',new Date(2020,3,21)),
    new Activity(5,'Go for school event','Nicoles prize giving day',new Date(2020,3,30)),
  ];

  toggleDetails(index){
    this.Activity[index].showDescription = !this.Activity[index].showDescription;
  }

  addNewActivity(activityl){
    let ActivityLength = this.Activity.length;
    Activity.id = ActivityLength+1;
    Activity.completeDate = new Date(Activity.completeDate)
    this.Activity.push(Activity)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
