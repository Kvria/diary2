import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newActivity:Activity = new Activity(0,"","",new Date())
  @Output() addNewActivity = new EventEmitter <Activity>()
  submitForm(){
      this.addNewActivity.emit(this.newActivity)
      this.newActivity = new Activity(0,"","",new Date())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
