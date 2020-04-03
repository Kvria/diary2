import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {

  @Output () complete = new EventEmitter <boolean>();
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
