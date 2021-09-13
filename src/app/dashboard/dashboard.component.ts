import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SERIES } from '../mock/serie-mock';
import { Serie } from '../model/serie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  series = SERIES;

  @Input() serie?: Serie;
  
  constructor() { }


  ngOnInit(): void {
  }

}
