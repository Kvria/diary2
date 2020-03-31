import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newActivity = new Activity(0,"","",new Date());
  @Output() addActivity = new EventEmitter<Activity>();

  submitActivity(){
this.addActivity.emit(this.newActivity);
  constructor() { }

  ngOnInit(): void {
  }

}
