import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
=======
>>>>>>> parent of e26ed1f (Cuarto commit, primera version estable de portfolio)

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EncabezadoComponent,
    AboutComponent,
    ExperienciasComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent,
    FooterComponent,
    Page404NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
