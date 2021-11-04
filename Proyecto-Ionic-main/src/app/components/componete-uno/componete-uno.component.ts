import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-componete-uno',
  templateUrl: './componete-uno.component.html',
  styleUrls: ['./componete-uno.component.scss'],
})


export class ComponeteUnoComponent implements OnInit {
  
  //Declaro unas variables
  dato:any;  //variable de cualquer tipo
  pass:any;
  dest:any;
  ori:any;

  //Haciendo referencia al elemento HTML
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;

  constructor(private activateroute: ActivatedRoute,
               private router: Router, 
               private animationCtrl: AnimationController) {

   //aqui llamo a los datos que obtuve de la navegacion anterior
   this.activateroute.queryParams.subscribe( params =>{

    if( this.router.getCurrentNavigation().extras.state ) {
      this.dato  = this.router.getCurrentNavigation().extras.state.dato;
      this.pass  = this.router.getCurrentNavigation().extras.state.pass;
      this.router.navigate(['component/uno'])
    };
   
  });

  }

  ngOnInit() {}
  vehiculos: any[]=[
    {id: 1, vehiculo:"Chevrolet SAil 2015"},
    {id: 2, vehiculo:"Toyota corolla 2020"},
    {id: 3, vehiculo:"Suzuki alto 2019"},
    {id: 4, vehiculo:"Kio rio 4 2016"}
  ]
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


  volver(){
    this.router.navigate(['/login'] )
  }
  siguiente(){
    let nav: NavigationExtras={
      state: { ori: this.ori, dest: this.dest }
    };
    this.router.navigate(['/ruta'], nav )
  }

 

}
