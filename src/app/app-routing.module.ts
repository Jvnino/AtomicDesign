import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MisCursosComponent } from './pages/mis-cursos/mis-cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'mis-cursos', component: MisCursosComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
