import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';
import { EdicionComponent } from './components/edicion/edicion.component';
import { AddComponent } from './components/add/add.component';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { AddSkillsComponent } from './components/add-skills/add-skills.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';

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
    SkillsComponent,
    ConocimientosComponent,
    EducacionComponent,
    EdicionComponent,
    AddComponent,
    AddEducacionComponent,
    AddProyectoComponent,
    AddSkillsComponent,
    AddExperienciaComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
