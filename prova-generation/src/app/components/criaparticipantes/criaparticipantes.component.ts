import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { findIndex } from 'rxjs/operators';
import { Turmas } from 'src/model/turmas';
import { novoParticipante, newParticipante } from 'src/model/participantes';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-criaparticipantes',
  templateUrl: './criaparticipantes.component.html',
  styleUrls: ['./criaparticipantes.component.css']
})
export class CriaparticipantesComponent implements OnInit {
  turmas: Turmas[];
  isLoadingResults = true;
  formularioDeUsuario: FormGroup;
  
  

  constructor(
    private _api: ApiService,
    private fb: FormBuilder,
    private np: FormBuilder
    ) { }


  ngOnInit() {
    this.criarCadastroParticipante();

/////////////////////Pegar todas as turmas para o select do form////////////////
    this._api.getAllTurmas().subscribe(res => {
      this.turmas = res;
      console.log(this.turmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
}

/////////////////////////Enviar novo Aluno ao DB////////////////////////////////
  enviarDados(){

    const newParticipante: any  = this.formularioDeUsuario.value;

    console.log(newParticipante);
    
    // alert('Participante criado com sucesso');

    this._api.createParticipante(newParticipante).subscribe(data =>{
      console.log(data);
    })

    this.formularioDeUsuario.reset();
  }

///////////////////////////Regras de Validação do Form//////////////////////////
  criarCadastroParticipante(){
    this.formularioDeUsuario = this.fb.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      email:['',Validators.compose([Validators.email])],
      observacoes:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      // turma:['',Validators.required],
      turma: []
    });
  }
  get nome(){
    return this.formularioDeUsuario.get('nome');
  }
  get email(){
    return this.formularioDeUsuario.get('email');
  }
  get observacoes(){
    return this.formularioDeUsuario.get('observacoes');
  }
  // get turma(){
  //   return this.formularioDeUsuario.get('turma');
  // }
////////////////////////////////////////////////////////////////////////////////

}