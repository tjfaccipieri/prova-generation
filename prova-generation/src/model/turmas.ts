export class Turmas {
  id: number;
  descricao: string;
  tipo: string;
  participantes:[]
}

export class novaTurma {
  constructor(
    id:number,
    descricao: string,
    tipo: string,
    participantes: [],
  ){
    this.id = id;
    this.descricao = descricao;
    this.tipo = tipo;
    this.participantes = participantes

  }
  id:number;
  descricao:string;
  tipo: string;
  participantes: []
}