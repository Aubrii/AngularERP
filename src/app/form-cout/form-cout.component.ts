import {Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoutService} from "../cout.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-cout',
  templateUrl: './form-cout.component.html',
  styleUrls: ['./form-cout.component.scss']
})
export class FormCoutComponent implements OnInit {
  // @Input() updateCout!: FormCoutComponent
  public  myFormGroup: FormGroup;
  textButton!:string;
  titreForm!:string;

  constructor(private  formBuilder: FormBuilder, private coutService : CoutService,
              private route: ActivatedRoute) {
    this.myFormGroup = this.formBuilder.group({
      type: [],
      categorie: [],
      designation: [],
      unite: [],
      prixUnitaire: [],
      fournisseur: [],
      remarque: [],
  });
     }




   createAndUpdate():void{
     this.route.params.subscribe(params =>{
       const coutID = +params['id']
       console.log(coutID)
       if(isNaN(coutID)) {
         this.coutService.create(this.myFormGroup.getRawValue()).subscribe(
           () : void =>{
             alert('Nouveau cout enregistrer')
           }
         )
       }else{
         this.coutService.update(this.myFormGroup.getRawValue(), coutID)
           .subscribe((): void => {
             alert('Update!');
           });
       }
   })
   }


  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const coutID = +params['id']
      if(!isNaN(coutID)) {
        this.textButton = 'Modifier le cout'
        this.titreForm = 'Modification du cout'
        this.coutService.getById(coutID).subscribe(data => {
          // Assuming res has a structure like:
          data = {
            type: data.type,
            categorie: data.categorie,
            designation: data.designation,
            unite: data.unite,
            prixUnitaire: data.prixUnitaire,
            fournisseur: data.fournisseur,
            remarque: data.remarque,
          }
          // Values in res that don't line up to the form structure
          // are discarded. You can also pass in your own object you
          // construct ad-hoc.
          this.myFormGroup.patchValue(data);
        });
      }else{
        this.textButton = 'Creer un nouveau cout'
        this.titreForm = "Création d'un du cout"
        this.formBuilder.group({
          type: [],
          categorie: [],
          designation: [],
          unite: [],
          prixUnitaire: [],
          fournisseur: [],
          remarque: [],
        });

      }
    })
  }

}
