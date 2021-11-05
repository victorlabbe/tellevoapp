import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { MapService } from 'src/app/service/map.service';



@Component({
  selector: 'app-componete-uno',
  templateUrl: './componete-uno.component.html',
  styleUrls: ['./componete-uno.component.scss'],
})


export class ComponeteUnoComponent implements OnInit {
  
  //Declaro unas variables
  datos:any;  //variable de cualquer tipo
  pass:any;
  dest:any;
  ori:any;

  //Haciendo referencia al elemento HTML
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;

  constructor( public alertController:AlertController,
               private activateroute: ActivatedRoute,
               private router: Router, 
               private animationCtrl: AnimationController,
               private map: MapService) {

   //aqui llamo a los datos que obtuve de la navegacion anterior
   this.activateroute.queryParams.subscribe( params =>{

    if( this.router.getCurrentNavigation().extras.state ) {
      this.dato  = this.router.getCurrentNavigation().extras.state.dato;
      this.pass  = this.router.getCurrentNavigation().extras.state.pass;
      this.router.navigate(['component/uno'])
    };
   
  });

  }

  ngOnInit() {

    this.map.initMap();
    this.map.printCurrentPosition();
  }

  vehiculos: any[]=[
    {id: 1, vehiculo:"Chevrolet SAil 2015"},
    {id: 2, vehiculo:"Toyota corolla 2020"},
    {id: 3, vehiculo:"Suzuki alto 2019"},
    {id: 4, vehiculo:"Kio rio 4 2016"}
  ]
   dato ={
    ori:"",
    dest:"",
    vehiculo:""

  };

  //Animacion de ionic/angular
   startLoad () {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(2)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    // Don't forget to start the animation!
    loadingAnimation.play();
    
    //Funcion para que dentro de 3 segundo rediriga a el login mientas xD
    setTimeout(() => {
      this.siguiente();
    }, 3000);
    
    
  }
 

  //limpiar los componente de la page
  limpiar(){
    //recorrer todas las entradas de un objeto entries obteniendo su clave y valor
    for(var [key, value] of Object.entries(this.dato) ){
      Object.defineProperty(this.dato,key,{value:""})
    }
  }


  volver(){
    this.router.navigate(['/login'] )
  }
  siguiente(){
    let nav: NavigationExtras={
      state: { ori: this.ori, dest: this.dest }
    };
    this.router.navigate(['/ruta'], nav )
  }
  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({

      header: titulo,
      message: message,
      buttons: ['OK']

    });

    await alert.present();

  }
 

}
