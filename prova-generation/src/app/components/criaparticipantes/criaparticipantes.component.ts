import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {of} from 'rxjs';
import { Turmas } from 'src/model/turmas';
import {ApiService } from '../../service/api.service';

@Component({
  selector: 'app-criaparticipantes',
  templateUrl: './criaparticipantes.component.html',
  styleUrls: ['./criaparticipantes.component.css']
})
export class CriaparticipantesComponent implements OnInit {
  turmas: Turmas[];
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getAllTurmas().subscribe(res => {
      this.turmas = res;
      console.log(this.turmas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
