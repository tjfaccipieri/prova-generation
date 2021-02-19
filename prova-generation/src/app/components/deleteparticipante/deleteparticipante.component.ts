import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-deleteparticipante',
  templateUrl: './deleteparticipante.component.html',
  styleUrls: ['./deleteparticipante.component.css']
})
export class DeleteparticipanteComponent implements OnInit {
  id: string;
  


  constructor(
    private _api: ApiService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
////////////////////////Pegar o ID para deletar o usuário///////////////////////
    this.id = this.route.snapshot.paramMap.get('id');
    this._api.getOne(this.id).subscribe(res => {
    console.log(res)
  });
}
///////////////////////////////////fechar o modal///////////////////////////////


///////////////////////////////////deletar o usuário////////////////////////////
  delete(){
    this._api.deleteParticipante(this.id).subscribe(res =>{
      alert('Usuário deletado com sucesso');
    });
    this._route.navigate(['/listaparticipantes']).then(()=> window.location.reload());
  }
}
