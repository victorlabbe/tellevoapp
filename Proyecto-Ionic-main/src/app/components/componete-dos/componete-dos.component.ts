import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApirestService } from 'src/app/service/apirest.service';
import { APIVehiculosService } from 'src/app/service/apivehiculos.service';

@Component({
  selector: 'app-componete-dos',
  templateUrl: './componete-dos.component.html',
  styleUrls: ['./componete-dos.component.scss'],
})
export class ComponeteDosComponent implements OnInit {
   user:any;
   users:any;
   posts:any;
   post:any={
    id:null, 
    nombre:"",
    rut:"",
    licencia:"",
    userId:""
   };

  constructor(private router:Router, private api: ApirestService ) { }
   ngOnInit() {
     this.getUsuarios();
   }
   ionViewWillEnter(){
    this.getUsuarios();
   }
   getUsuarios() {
    this.api.getUsuarios().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  


  
}
