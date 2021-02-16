import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../service/api.service';
import {Turmas} from 'src/model/turmas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {novaTurma} from 'src/model/novaTurma'

@Component({
  selector: 'app-listaturmas',
  templateUrl: './listaturmas.component.html',
  styleUrls: ['./listaturmas.component.css']
})
export class ListaturmasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'tipo'];
  dataSourceTurmas: Turmas[];
  isLoadingResults = true;
  enviaTurma = this.formBuilder.group({
    descricao: '',
    tipo: ''
  })
  formularioDeTurma: FormGroup;
  ;

  enviaTurmaJson: any;
  

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private nt:FormBuilder
    ) { }

  ngOnInit() {
    this.criarNovaTurma();

    this._api.getAllTurmas().subscribe(res => {
      this.dataSourceTurmas = res;
      console.log(this.dataSourceTurmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  enviarDadosTurma(){
    const dadosTurma = this.formularioDeTurma.value;

    const turma = new novaTurma(
      dadosTurma.descricao,
      dadosTurma.tipo,
    );
    alert(`A turma ${turma.descricao} foi criada com sucesso`);
    this.formularioDeTurma.reset();
  }

  criarNovaTurma(){
    this.formularioDeTurma = this.nt.group({
      descricao:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      tipo:['',Validators.required],
    })
  }

  get descricao(){
    return this.formularioDeTurma.get('descricao');
  }
  get tipo(){
    return this.formularioDeTurma.get('tipo');
  }

  OnSubmit(){
    this.enviaTurmaJson = JSON.stringify(this.enviaTurma.value)
    console.log(this.enviaTurma.value) ;
    console.warn(this.enviaTurmaJson);
    alert('Turma criada com sucesso');
    this._api.createTurma(Turmas).subscribe(turma => {this.enviaTurmaJson.post(turma)});
    this.enviaTurma.reset();
  }

}
