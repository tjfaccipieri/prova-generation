import { Injectable } from '@angular/core';
import{ Observable, of, throwError}from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Participantes} from '../../model/participantes';
import {Turmas} from '../../model/turmas'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiParticipantes = 'http://93.188.161.223:9000/participantes';
const apiTurmas = 'http://93.188.161.223:9000/turma';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Participantes[]> {
    return this.http.get<Participantes[]>(apiParticipantes).pipe(
      tap(participantes => console.log('leu os participantes')),
      catchError(this.handleError('getParticipantes', []))
    );
  }

  getAllTurmas(): Observable<Turmas[]> {
    return this.http.get<Turmas[]>(apiTurmas).pipe(
      tap(turmas => console.log('leu os participantes')),
      catchError(this.handleError('getParticipantes', []))
    );
  }

  get(id: any) : Observable<any>{
    return this.http.get(`${apiParticipantes}/${id}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(apiParticipantes, data);
  }

  createTurma(turma): Observable<typeof turma>{
    return this.http.post(apiTurmas, turma, httpOptions).pipe(
      catchError(this.handleError('createTurma', turma))
    );
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${apiParticipantes}/${id}`, data);
  }

  delete(id: 'id'): Observable<any> {
    return this.http.delete(`${apiParticipantes}/${id}`);
  }

  public deleteUser(id) {
    let endPoints = `${apiParticipantes}/${id}`
    this.http.delete(endPoints).subscribe(data => {
      console.log(data);
    });
  }

  findByTitle(title: any): Observable<Participantes[]> {
    return this.http.get<Participantes[]>(`${apiParticipantes}?title=${title}`);
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
}
}
