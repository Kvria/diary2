import { Component } from '@angular/core';
import { Activity} from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diary';
  
  diary:Activity[] = [
    {id:1,name:'Attend meeting'},
    {id:2,name:'Got to the office'},
    {id:3,name:'Reply to emails'},
    {id:4,name:'Do house shopping'},
    {id:5,name:'School meeting '},
    {id:6,name:'Pick children from school'},
  ];
}
