import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  implements OnInit {

  //Haciendo referencia al elemento HTML
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;


  //Declaro unas variables
  dato:any;  //variable de cualquer tipo
  pass:any;
  dest:any;
  ori:any;


  constructor( private activateroute: ActivatedRoute,
               private router: Router, 
               private animationCtrl: AnimationController) {

    //aqui llamo a los datos que obtuve de la navegacion anterior
    this.activateroute.queryParams.subscribe( params =>{

      if( this.router.getCurrentNavigation().extras.state ) {
        this.dato  = this.router.getCurrentNavigation().extras.state.dato;
        this.pass  = this.router.getCurrentNavigation().extras.state.pass;
        this.router.navigate(['home/uno'])
      };
     
    });
  

  }


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


  ngOnInit() {
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
  segmentChanged(event: any){
    console.log(event)
    let direccion=event.detail.value
    this.router.navigate(['home/'+direccion])

  }

}
