import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

 quotes:Quote[] = [
  
  ];

  createQuote(quote){
    this.quotes.push(quote);
  }
  deleteQuote(i){
    this.quotes.splice(i,1);
  }

  like(index){
    this.quotes[index].likes = this.quotes[index].likes + 1
  }
  dislike(index){
    this.quotes[index].dislikes = this.quotes[index].dislikes + 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
