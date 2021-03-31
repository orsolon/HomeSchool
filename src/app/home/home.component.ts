import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string;
  color: string;
  
  series: any[] = [
    {text: "1st Grade", color: "green"},
    {text: "2nd Grade", color: "red"},
    {text: "3rd Grade", color: "blue"},
    {text: "4th Grade", color: "orange"}, 
    {text: "5th Grade", color: "gray"}
  ]
  
   
  constructor() { }

  ngOnInit(): void {
  }

}
