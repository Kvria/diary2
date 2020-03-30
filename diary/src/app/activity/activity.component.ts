import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  diary:Activity[] = [
    {id:1,name:'Attend meeting',description:'Attend meeting with investors to upcoming business event'},
    {id:2,name:'Go to the office',description:'Manage and overlook matters handled by the staff'},
    {id:3,name:'Reply to emails',description:'Send emails to other attending business investors'},
    {id:4,name:'Do house shopping',description:'Need to buy bread and milk'},
    {id:5,name:'School meeting',description:'Attend my siblings school event'},
    {id:6,name:'Pick children from school',description:'School ends at 4:00 sharp'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
