import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:"inicio",component:EncabezadoComponent},
  {path:"about",component:AboutComponent},
  {path:"experiencia",component:ExperienciaComponent},
  {path:"proyectos",component:ProyectosComponent},
  {path:"skills",component:SkillsComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:"**", component:Page404NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
