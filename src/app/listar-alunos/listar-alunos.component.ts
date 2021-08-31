import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css'],
  providers: [AlunoService]
})
export class ListarAlunosComponent implements OnInit {
  alunos: string[] = [];
  

  //constructor( private alunoService = AlunoService) { }

  ngOnInit() {
    //this.alunos = this.alunoService.getAlunos();
  }

  onAddAluno(aluno: string)
  {
    //this.alunoService.addAluno(aluno);
  }


}
