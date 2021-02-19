import { Injectable } from '@angular/core';
import{ Observable, of, throwError}from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Participantes, novoParticipante, getOne, newParticipante, editarparticipante, enviarparticipanteeditado} from '../../model/participantes';
import {Turmas, novaTurma} from '../../model/turmas';
import { EditarparticipanteComponent } from '../components/editarparticipante/editarparticipante.component';




//////////////////////Variáveis para acesso ao BD///////////////////////////////
////////////////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiParticipantes = 'http://93.188.161.223:9000/participantes/';
  private apiTurmas = 'http://93.188.161.223:9000/turma';
  // private options: any = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
  private options: any = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(
    private http: HttpClient
    ) {}


  getAll():Observable<Participantes[]>{
    return this.http.get<Participantes[]>(this.apiParticipantes)
  }
  
  getAllTurmas(){
    return this.http.get<Turmas[]>(this.apiTurmas)
  }
  
  createParticipante(newParticipante:any){
    return this.http.post<novoParticipante[]>(this.apiParticipantes, newParticipante, this.options)
  }
  
  createTurma(turmaJSON:any){
    return this.http.post<novaTurma[]>(this.apiTurmas, turmaJSON, this.options)
  }
  
  getOne(id: string):Observable<getOne>{
    const urlid = `${this.apiParticipantes}${id}`;
    return this.http.get<getOne>(urlid);
  }

  // updateParticipante(id:string, updateParticipant: editarparticipante):Observable<enviarparticipanteeditado>{
  //   const urlid = `${this.apiParticipantes}/${id}`;
  //   return this.http.put<enviarparticipanteeditado>(urlid, updateParticipant, this.options)
  // }

  updateParticipante(id:string, updateParticipant: editarparticipante){
    const urlid = `${this.apiParticipantes}${id}`;
    return this.http.patch<editarparticipante>(urlid, updateParticipant)
  }

  deleteParticipante(id:string): Observable<any>{
    const urlid = `${this.apiParticipantes}${id}`;
    return this.http.delete(urlid);
  }
}  

