import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../service/api.service';
import {Turmas} from 'src/model/turmas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {novaTurma} from 'src/model/turmas'

@Component({
  selector: 'app-listaturmas',
  templateUrl: './listaturmas.component.html',
  styleUrls: ['./listaturmas.component.css']
})
export class ListaturmasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'tipo'];
  dataSourceTurmas: Turmas[];
  isLoadingResults = true;
  formularioDeTurma: FormGroup;  

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private nt:FormBuilder
    ) { }
    
///////////////////Criar tabela de turmas automaticamente///////////////////////
  ngOnInit() {
    this.validarTurma();

    this._api.getAllTurmas().subscribe(res => {
      this.dataSourceTurmas = res;
      console.log(this.dataSourceTurmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    })
    ;
  }
////////////////////////////////////////////////////////////////////////////////

  ////////////////passos para a validação do formulário/////////////////////////
  get descricao(){
    return this.formularioDeTurma.get('descricao');
  }
  get tipo(){
    return this.formularioDeTurma.get('tipo');
  }
  validarTurma(){
    this.formularioDeTurma = this.nt.group({
      descricao:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      tipo:['',Validators.required],
    })
  }
////////////////////////////////////////////////////////////////////////////////

///////////////////////Cadastrar turma no Database//////////////////////////////
  cadastraTurma(){
    const turmaJSON: any = this.formularioDeTurma.value;
    // console.log(turmaJSON);
    alert('Turma criada com sucesso');
    // this.formularioDeTurma.reset();
    this._api.createTurma(this.formularioDeTurma.getRawValue()).subscribe(data =>{
      console.log(turmaJSON);
    })
    this.ngOnInit();
  };


}
