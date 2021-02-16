import {Routes} from '@angular/router';
import { CriaparticipantesComponent } from './components/criaparticipantes/criaparticipantes.component';
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
];

export default appRoutes