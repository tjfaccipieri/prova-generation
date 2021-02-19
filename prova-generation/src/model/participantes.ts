import { novaTurma, Turmas } from './turmas';

//listar todos os participantes - não precisa de observable
export class Participantes {
  id: number;
  name: string;
  email: string;
  observacoes: string;
  // turma: any;
}

//criar um novo participante - não precisa de observable
export interface novoParticipante {
  id: any;
  nome: string;
  email: string;
  observacoes: string;
  // turma: any;
}

export interface newParticipante {
  id: number;
  nome: string;
  email: string;
  observacoes: string;
  // turma: any;
}

export interface getOne {
  id: string;
  nome: string;
  email: string;
  observacoes: string;
  // turma: Turmas[];
}

export interface editarparticipante{
  id: number;
  nome: string;
  email: string;
  observacoes: string;
}

export interface enviarparticipanteeditado{
  nome: string;
  email: string;
  observacoes: string;
}

export interface userdel{
  id: number;
}
