import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    FooterComponent,
    LoginComponent,
    NavegacionComponent,
    Page404NotFoundComponent,
    PortfolioComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
