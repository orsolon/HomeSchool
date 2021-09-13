import { Component, OnInit } from '@angular/core';

export interface Cronograma {
  horario: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const CRONO_DATA: Cronograma[] = [
  {horario: "13h10-14h", monday: "Geografia", tuesday: "P.E", wednesday: "Geografia", thursday: "Project", friday:"História" },
  {horario: "14h-14h50", monday: "Math", tuesday: "Math", wednesday: "Math", thursday: "Math", friday:"Math" },
  {horario: "14h50-15h40", monday: "Português", tuesday: "Português", wednesday: "Português", thursday: "Português", friday:"Português" },
  {horario: "15h40-16h10", monday: "INTERVALO", tuesday: "INTERVALO", wednesday: "INTERVALO", thursday: "INTERVALO", friday:"INTERVALO" },
  {horario: "16h10-17h", monday: "E.S.L", tuesday: "Maker", wednesday: "E.S.L", thursday: "P.E", friday:" E.S.L" },
  {horario: "17h-17h50", monday: "Science", tuesday: "Maker", wednesday: "Science", thursday: "Music", friday:"Arts" }

];

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  displayedColumns: string[] = ['demo-Horario', 'demo-Monday', 'demo-Tuesday', 'demo-Wednesday', 'demo-Thursday', 'demo-Friday'];
  dataSource = CRONO_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
