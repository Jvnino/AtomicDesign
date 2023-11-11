import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './atoms/header/header.component';
import { CardComponent } from './molecules/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './atoms/footer/footer.component';
import { MisCursosComponent } from './pages/mis-cursos/mis-cursos.component';
import { ProgressBarComponent } from './atoms/progress-bar/progress-bar.component';
import { BackbuttonComponent } from './atoms/backbutton/backbutton.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormComponent } from './molecules/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    FooterComponent,
    MisCursosComponent,
    ProgressBarComponent,
    BackbuttonComponent,
    RegistroComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
