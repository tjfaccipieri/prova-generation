export class Usuario {
  constructor(
    nome: string,
    email: string,
    observacoes: string,
  ){
    this.nome = nome;
    this.email = email;
    this.observacoes = observacoes;
  }

  nome:string;
  email: string;
  observacoes: string
}