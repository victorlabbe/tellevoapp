import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})



export class RestablecerPage implements OnInit {

  dato:any;  //variable de cualquer tipo
  pass:any;
  newPass: any;
  

  constructor(
    private activateroute: ActivatedRoute, 
    private router: Router,
    public toastController: ToastController
     ) {


    //Recibiendo parametros desde otra pagina
    this.activateroute.queryParams.subscribe( params =>{

      if( this.router.getCurrentNavigation().extras.state ) {

        this.dato = this.router.getCurrentNavigation().extras.state.dato;
        this.pass = this.router.getCurrentNavigation().extras.state.pass;
      };
    });

  }

  ngOnInit() {
  }
  

  siguiente(){
    let nav: NavigationExtras={
      state: { dato: this.dato, pass: this.newPass }
    };

    this.router.navigate(['/login'])
  }
  async presentToast1(){
    const toast = await this.toastController.create({
      
      message: 'Se mando un Email a su cuenta.',
      duration: 3000,
      position: "bottom"
    });
    toast.present()

  }
}

