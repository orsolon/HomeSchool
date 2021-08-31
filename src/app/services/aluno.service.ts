import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: string[] =  ["Maria Vena", "Ricardo Lotte", "Luan Fabricio"];
  
  getAlunos(){
    return this.alunos;
  }

  addAluno(aluno: string){
    this.alunos.push(aluno)
  }

  constructor() { }

  

}
