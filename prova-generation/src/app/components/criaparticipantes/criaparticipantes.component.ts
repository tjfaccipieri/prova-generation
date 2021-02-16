import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Turmas } from 'src/model/turmas';
import {ApiService } from '../../service/api.service';
import {Usuario } from '../../../model/novoParticipante';

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
  private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.criarCadastroParticipante();

    this._api.getAllTurmas().subscribe(res => {
      this.turmas = res;
      console.log(this.turmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
}
  enviarDados(){

    const dadosFormulario  = this.formularioDeUsuario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.observacoes,
    );
    alert(`O usuário ${usuario.nome} foi criado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);
    this.formularioDeUsuario.reset();
  }


  criarCadastroParticipante(){
    this.formularioDeUsuario = this.fb.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      email:['',Validators.compose([Validators.email])],
      observacoes:['',Validators.compose([Validators.required,Validators.minLength(3)])],
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

}