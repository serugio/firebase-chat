import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from "../../services/heroe.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {
  
  heroe:Heroe = {
    nombre: "", 
    bio:"",
    casa:"Marvel",
  }
  nuevo:boolean = false;
  id:string;

  constructor(private _heroesService:HeroeService, private router:Router,
              private activatedRoute:ActivatedRoute ) { 
    this.activatedRoute.params.subscribe(parametros => {
    this.id=parametros['id'];
  });

  }
  
  
  guardar(){
    
    //console.log(this.heroe);
    if(this.id=="nuevo"){
  //insertando
    this._heroesService.nuevoHeroe(this.heroe)
    .subscribe((data: any) =>{
    this.router.navigate(['/heroe', data.name ])
    },
    error=> console.log(error));

    }
  else{
      
    //actualizando
    this._heroesService.actualizarHeroe(this.heroe, this.id)
    .subscribe((data: any) =>{
     console.log(data);
    },
    error=> console.log(error));
  }

  



  }
}
