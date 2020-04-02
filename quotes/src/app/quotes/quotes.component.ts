import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Attending a business meeting','preparation for the business event next week',new Date(2020,3,14)),
    new Quote(2,'Go to the office','make sure the packages were delivered',new Date(2020,3,18)),
    new Quote(3,'Reply to emails','for inviting investors to the event',new Date(2020,3,14)),
   
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
