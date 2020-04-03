import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'orangechicken','Creativity is intelligence having fun.','Albert Einstein',new Date(2020,3,14)),
    new Quote(2,'luckymonkey','Work on you, for you.','Anonymous',new Date(2020,3,18)),
    new Quote(3,'ninipanini','Sometimes you get the best light from a burning bridge.','Don Henley',new Date(2020,3,14)),
   
  ];

  createQuote(quote){
    this.quotes.push(quote)
  }
  deleteActivity(i){
    this.quotes.splice(i,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
