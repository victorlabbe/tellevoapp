import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatSliderModule} from '@angular/material/slider'; 

import { HomePageRoutingModule } from './home-routing.module';
import { ComponeteUnoComponent } from 'src/app/components/componete-uno/componete-uno.component';
import { ComponeteDosComponent } from 'src/app/components/componete-dos/componete-dos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage, ComponeteUnoComponent, ComponeteDosComponent]
})
export class HomePageModule {}
