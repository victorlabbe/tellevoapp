
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DatetimeOptions } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  dato:string;
  pass:string;


  constructor( private router:Router) { }

  ngOnInit() {
  }


  siguiente(){
    //declaro elemento navigationExtras
    let nav: NavigationExtras={
      state: { dato: this.dato, pass: this.pass }
    };

    this.router.navigate(['/home'], nav )
  }

  
  restablecer(){
    //declaro elemento navigationExtras
    let nav: NavigationExtras={
      state: { dato: this.dato, pass: this.pass }
    };

    this.router.navigate(['/restablecer'], nav )
  }




}

