import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SERIES } from '../mock/serie-mock';
import { Serie } from '../model/serie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'escola';
  
 
  series = SERIES;

 
  constructor(private router: Router) { }

  selectedSerie?: Serie;
  onSelected(serie: Serie){
    this.selectedSerie = serie;
    //this.router.navigate(['/dashboard']);
    }
  ngOnInit(): void {
  }

}
