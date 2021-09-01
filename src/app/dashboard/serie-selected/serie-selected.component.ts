import { Component, OnInit } from '@angular/core';
import { SERIES } from 'src/app/mock/serie-mock';


@Component({
  selector: 'app-serie-selected',
  templateUrl: './serie-selected.component.html',
  styleUrls: ['./serie-selected.component.css']
})
export class SerieSelectedComponent implements OnInit {

  series = SERIES;

  constructor() { }

  ngOnInit(): void {
  }

}
