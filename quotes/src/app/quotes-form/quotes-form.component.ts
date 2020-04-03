import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  
  newQuote:Quote = new Quote("","","",new Date())
  @Output() addNewQuote = new EventEmitter <Quote>()
  submitForm(){
      this.addNewQuote.emit(this.newQuote)
  }
  
  constructor() { }

      ngOnInit() {
  }

}
