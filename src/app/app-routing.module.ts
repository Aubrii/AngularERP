import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from "./header/header.component";
import {FormCoutComponent} from "./form-cout/form-cout.component";
import {ListCoutComponent} from "./list-cout/list-cout.component";
import {ListOuvrageComponent} from "./list-ouvrage/list-ouvrage.component";
import {FormOuvrageComponent} from "./form-ouvrage/form-ouvrage.component";
import {DetailOuvrageComponent} from "./detail-ouvrage/detail-ouvrage.component";
import {OuvrageAddCoutComponent} from "./ouvrage-add-cout/ouvrage-add-cout.component";


const routes: Routes = [
  { path: 'cout/:id', component: FormCoutComponent},
  { path: 'cout', component: FormCoutComponent, },
  { path: 'ouvrage/:id', component: FormOuvrageComponent, },
  { path: 'ouvrage', component: FormOuvrageComponent, },
  { path: 'ouvrageDetail/:id', component: DetailOuvrageComponent, },
  { path: '', component: HeaderComponent},
  { path: 'listCout', component: ListCoutComponent},
  { path: 'listOuvrage', component: ListOuvrageComponent},
  { path: 'ajoutCout/:id', component: OuvrageAddCoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
