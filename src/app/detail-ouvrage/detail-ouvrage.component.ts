import {Component, OnDestroy, OnInit} from '@angular/core';
import {OuvrageService} from "../ouvrage.service";
import {Ouvrage} from "../ouvrage.model";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-detail-ouvrage',
  templateUrl: './detail-ouvrage.component.html',
  styleUrls: ['./detail-ouvrage.component.scss']
})
export class DetailOuvrageComponent implements OnInit {
  ouvrage!:Ouvrage
  ouvrageID!:number
  prixUnitaire!:number
  constructor(private ouvrageService: OuvrageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params =>{
    this.ouvrageID = +params['id'];
    this.ouvrageService.getById(this.ouvrageID)
    } )
    this.getById()
    // this.tes()
  }

  getById():void{
  console.log("tettstestetstset<")
    this.ouvrageService.getById(this.ouvrageID).subscribe(data =>{ this.ouvrage = data;
    // console.log(data)


    });
  }
  // tes():void{
  //   console.log("fddfglkgfdjkgfdjkdgfkjdgfkj")
  //   const test = this.ouvrageService.getById(this.ouvrageID).pipe(map(ouvrage =>{
  //     ouvrage.tap''
  //   }))
  //   test.subscribe(data => console.log(data))
  // }



}
