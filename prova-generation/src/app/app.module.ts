/* Imports gerais*/ 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'

/* Sistema de rotas*/ 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListaparticipantesComponent } from './components/listaparticipantes/listaparticipantes.component';
import { ListaturmasComponent } from './components/listaturmas/listaturmas.component';
import { CriaparticipantesComponent } from './components/criaparticipantes/criaparticipantes.component';

/* Icones do footer*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Material Design Angular
import { MatButtonModule } from '@angular/material/button'; 
import  {MatCardModule} from '@angular/material/card';
import  {MatIconModule} from '@angular/material/icon';
import  {MatInputModule} from '@angular/material/input';
import  {MatListModule} from '@angular/material/list';
import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import  {MatSelectModule} from '@angular/material/select';
import  {MatSidenavModule} from '@angular/material/sidenav';
import  {MatTableModule} from '@angular/material/table';
import  {MatToolbarModule} from '@angular/material/toolbar';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';

import appRoutes from './routerConfig';
import {ReactiveFormsModule} from '@angular/forms'
import {ModalModule} from './_modal';
import { EditarparticipanteComponent } from './components/editarparticipante/editarparticipante.component';
import { DeleteparticipanteComponent } from './components/deleteparticipante/deleteparticipante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaparticipantesComponent,
    ListaturmasComponent,
    CriaparticipantesComponent,
    EditarparticipanteComponent,
    DeleteparticipanteComponent,
  ],
  imports: [
    ModalModule,
    AlertModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ButtonsModule.forRoot(), 
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
