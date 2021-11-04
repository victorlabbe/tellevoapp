import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponeteDosComponent } from 'src/app/components/componete-dos/componete-dos.component';
import { ComponeteUnoComponent } from 'src/app/components/componete-uno/componete-uno.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    //declaro las rutas hijas dque se cargaran en la page "home"
    children:[
      {
        path: 'uno',
        component: ComponeteUnoComponent
      },
      {
        path: 'dos',
        component: ComponeteDosComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
