import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Participantes } from 'src/model/participantes';
import { ModalService } from 'src/app/_modal';


@Component({
  selector: 'app-listaparticipantes',
  templateUrl: './listaparticipantes.component.html',
  styleUrls: ['./listaparticipantes.component.css']
})
export class ListaparticipantesComponent implements OnInit {
  displayedColumns: string[] =['id', 'nome', 'email', 'observacoes', 'turma', 'editar', 'deletar' ];
  dataSource: Participantes[];
  isLoadingResults = true;


  
  constructor(

    private _api: ApiService,
    public modalService: ModalService,
    ) { }

  

  ngOnInit(){
    this._api.getAll().subscribe(res =>{
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err =>{
      console.log(err);
      this.isLoadingResults=false;
    });

    // this._api.update().subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err =>{
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
    // this._api.delete(this.displayedColumns.find('index': 0)).subscribe(res => {
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    //   this.isLoadingResults = false;
    // }, err =>{
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
  }

}
