import {Component, Input, OnInit} from '@angular/core';
import {OuvrageService} from "../ouvrage.service";
import {Ouvrage} from "../ouvrage.model";


@Component({
  selector: 'app-list-ouvrage',
  templateUrl: './list-ouvrage.component.html',
  styleUrls: ['./list-ouvrage.component.scss']
})
export class ListOuvrageComponent implements OnInit {
  listOuvrage!: Ouvrage[];
  columnsToDisplay = ["designation","benefice","aleas", "unite","ratio", "uRatio","prixUnitaire", "boutons"];

  constructor(private ouvrageService: OuvrageService) { }

  ngOnInit(): void {
    this.getAll()

  }
  getAll():void{
    // this.ouvrageService.getAll().subscribe(data => console.log(data) )
  this.ouvrageService.getAll().subscribe(data =>{
   this.listOuvrage = data;
   console.log(data[0].cout[0].type);
   console.log(data) })
  }
  delete(id: number): void{
    this.ouvrageService.deleteByID(id).subscribe(() => this.ngOnInit())
  }

}
