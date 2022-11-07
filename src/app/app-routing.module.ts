import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from "./header/header.component";
import {FormCoutComponent} from "./form-cout/form-cout.component";
import {ListCoutComponent} from "./list-cout/list-cout.component";


const routes: Routes = [
  { path: 'cout/:id', component: FormCoutComponent},
  { path: 'cout', component: FormCoutComponent, },
  {path: '', component: HeaderComponent},
  {path: 'list', component: ListCoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
