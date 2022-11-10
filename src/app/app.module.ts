import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ListCoutComponent } from './list-cout/list-cout.component';
import { CoutComponent } from './cout/cout.component';
import { FormCoutComponent } from './form-cout/form-cout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ListOuvrageComponent } from './list-ouvrage/list-ouvrage.component';
import { FormOuvrageComponent } from './form-ouvrage/form-ouvrage.component';
import { DetailOuvrageComponent } from './detail-ouvrage/detail-ouvrage.component';
import {MatCardModule} from "@angular/material/card";
import { OuvrageAddCoutComponent } from './ouvrage-add-cout/ouvrage-add-cout.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ListCoutComponent,
    CoutComponent,
    FormCoutComponent,
    ListOuvrageComponent,
    FormOuvrageComponent,
    DetailOuvrageComponent,
    OuvrageAddCoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
