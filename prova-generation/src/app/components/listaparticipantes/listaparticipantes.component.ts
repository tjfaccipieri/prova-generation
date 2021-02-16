import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Participantes } from 'src/model/participantes';

@Component({
  selector: 'app-listaparticipantes',
  templateUrl: './listaparticipantes.component.html',
  styleUrls: ['./listaparticipantes.component.css']
})
export class ListaparticipantesComponent implements OnInit {
  displayedColumns: string[] =['id', 'nome', 'email', 'observacoes', 'turma', 'editar', 'deletar' ];
  dataSource: Participantes[];
  isLoadingResults = true;
  
  constructor(private _api: ApiService) { }
  // constructor() {}

  ngOnInit(){
    this._api.getAll().subscribe(res =>{
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err =>{
      console.log(err);
      this.isLoadingResults=false;
    });




    // this._api.addParticipantes(Participants).subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err =>{
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
    // this._api.editParticipantes(Participants, id).subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err =>{
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
    // this._api.deleteParticipantes(id).subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err =>{
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
  }

}
