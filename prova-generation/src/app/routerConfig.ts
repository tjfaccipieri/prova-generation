import {Routes} from '@angular/router';
import { CriaparticipantesComponent } from './components/criaparticipantes/criaparticipantes.component';
import { DeleteparticipanteComponent } from './components/deleteparticipante/deleteparticipante.component';
import { EditarparticipanteComponent } from './components/editarparticipante/editarparticipante.component';
import { HomeComponent } from './components/home/home.component';
import { ListaparticipantesComponent } from './components/listaparticipantes/listaparticipantes.component';
import { ListaturmasComponent } from './components/listaturmas/listaturmas.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'listaparticipantes',
    component: ListaparticipantesComponent
  },
  {
    path:'listaturmas',
    component: ListaturmasComponent
  },
  {
    path:'criaparticipantes',
    component: CriaparticipantesComponent
  },
  {
    path:'editarparticipante/:id',
    component: EditarparticipanteComponent
  },
  {
    path: 'deleteparticipante/:id',
    component: DeleteparticipanteComponent
  },
];

export default appRoutes