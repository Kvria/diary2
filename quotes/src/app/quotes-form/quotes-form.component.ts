import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  
  newQuote:Quote = new Quote(0,"","",new Date())
  @Output() addNewQuote = new EventEmitter <Quote>()
  submitForm(){
      this.addNewQuote.emit(this.newQuote)
      this.newQuote= new Quote(0,"","",new Date())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
