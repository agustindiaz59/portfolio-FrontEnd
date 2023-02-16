import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
<<<<<<< HEAD

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
>>>>>>> 623e530b88a894d879ddb01cd58597195d6ed51d

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EncabezadoComponent,
    AboutComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent,
    FooterComponent,
<<<<<<< HEAD
    Page404NotFoundComponent,
    PortfolioComponent,
    LoginComponent
=======
    Page404NotFoundComponent
>>>>>>> 623e530b88a894d879ddb01cd58597195d6ed51d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
