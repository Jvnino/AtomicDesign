import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MisCursosComponent } from './pages/mis-cursos/mis-cursos.component';

const routes: Routes = [
    {path: 'mis-cursos', component: MisCursosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
