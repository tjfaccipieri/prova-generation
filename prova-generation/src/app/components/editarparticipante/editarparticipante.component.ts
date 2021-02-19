import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { editarparticipante, getOne, newParticipante, novoParticipante } from 'src/model/participantes';
import { Turmas } from 'src/model/turmas';
import { ApiService } from '../../service/api.service';
import { Participantes } from 'src/model/participantes';


@Component({
  selector: 'app-editarparticipante',
  templateUrl: './editarparticipante.component.html',
  styleUrls: ['./editarparticipante.component.css']
})
export class EditarparticipanteComponent implements OnInit {
  turmas: Turmas[];
  isLoadingResults = true;
  formularioDeUsuario: FormGroup;
  id: string;
  user: editarparticipante;

  constructor(
    private _api: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
/////////////////////Popular o form com o usuário correto///////////////////////
this.id = this.route.snapshot.paramMap.get('id');
this._api.getOne(this.id).subscribe(res => {
  this.user = {
    id: parseInt(this.id),
    nome: res.nome,
    email: res.email,
    observacoes: res.observacoes
  }
});
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
update(){
  this._api.updateParticipante(this.id, this.user).subscribe(res=>{
    alert('Usuário atualizado com sucesso');

  }
    )
}

///////////////////////////Regras de Validação do Form//////////////////////////
  criarCadastroParticipante(){
    this.formularioDeUsuario = this.fb.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      email:['',Validators.compose([Validators.email])],
      observacoes:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      turma:[''],
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
  get turma(){
    return this.formularioDeUsuario.get('turma');
  }

}