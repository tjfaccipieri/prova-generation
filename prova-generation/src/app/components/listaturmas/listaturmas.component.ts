import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../service/api.service';
import {Turmas} from 'src/model/turmas';
import { FormBuilder } from '@angular/forms';

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
  });

  enviaTurmaJson: any;
  

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this._api.getAllTurmas().subscribe(res => {
      this.dataSourceTurmas = res;
      console.log(this.dataSourceTurmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  OnSubmit(){
    this.enviaTurmaJson = JSON.stringify(this.enviaTurma.value)
    console.log(this.enviaTurma.value) ;
    console.warn(this.enviaTurmaJson);
    alert('Turma criada com sucesso');
    this._api.createTurma(Turmas).subscribe(turma => {this.enviaTurmaJson.post(turma)});
    // this.enviaTurma.reset();
  }

}
