import {Component, OnInit} from '@angular/core';
import {CoutService} from "../cout.service";
import {Cout} from "../cout.model";

@Component({
  selector: 'app-list-cout',
  templateUrl: './list-cout.component.html',
  styleUrls: ['./list-cout.component.scss']
})
export class ListCoutComponent implements OnInit {
  listCout!: Cout[]
  constructor(private coutService:CoutService) { }

  ngOnInit(): void {
    this.getAll()
  }

   getAll():void{
    console.log('tete')
    this.coutService.getAll().subscribe(data => this.listCout = data);
   }



}
