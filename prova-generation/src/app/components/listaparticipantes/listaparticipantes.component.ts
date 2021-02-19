import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { editarparticipante, Participantes } from 'src/model/participantes';
import { ModalService } from 'src/app/_modal';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { map } from "rxjs/operators";






@Component({
  selector: 'app-listaparticipantes',
  templateUrl: './listaparticipantes.component.html',
  styleUrls: ['./listaparticipantes.component.css']
})
export class ListaparticipantesComponent implements OnInit {
  displayedColumns: string[] =['id', 'nome', 'email', 'observacoes', 'turma', 'editar', 'deletar' ];
  dataSource: Participantes[];
  isLoadingResults = true;
  id: string;
  user: editarparticipante;
  userdel: number;
  

  constructor(
    private _api: ApiService,
    public modalService: ModalService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(){
    
///////////////////////////////Gerar lista inicial de usuários//////////////////
    this.route.params.pipe(
      map(params => params._api)
    )

this._api.getAll().subscribe(res =>{
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err =>{
      console.log(err);
      this.isLoadingResults=false;
    });
  }



////////////////////////Pegar o ID para deletar o usuário///////////////////////
  pegarId(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this._api.getOne(this.id).subscribe(res => {
    console.log(res)
  });
}
///////////////////////////////////deletar o usuário////////////////////////////
  delete(){
    this._api.deleteParticipante(this.id).subscribe(res =>{
      alert('Usuário deletado com sucesso');
    })
  }
  

  
}