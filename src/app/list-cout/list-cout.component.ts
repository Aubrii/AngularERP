import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CoutService} from "../cout.service";
import {Cout} from "../cout.model";



@Component({
  selector: 'app-list-cout',
  templateUrl: './list-cout.component.html',
  styleUrls: ['./list-cout.component.scss']
})
export class ListCoutComponent implements OnInit {
  @Input() listCout!: Cout[]
  columnsToDisplay = ["type","categorie","designation", "unite", "prixUnitaire", "boutons"];


  constructor(private coutService:CoutService) { }


  ngOnInit(): void {
    this.getAll()
    }


   getAll():void{
    this.coutService.getAll().subscribe(data => {
      this.listCout = data;
      console.log(data)
    });
   }

  delete(id:number):void{
    // this.coutService.deleteByID(this.listCout.map(value => value.id)).subscribe(() => this.deleteCout.emit())

    this.coutService.deleteByID(id).subscribe(() => this.ngOnInit())
  }


}
