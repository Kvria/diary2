import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {

  @Output () complete = new EventEmitter <boolean>();
  
  likes=0
  dislikes=0

  likes(){
    this.likes = this.likes + 1
  }
  dislikes(){
    this.dislikes = this.dislikes + 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
