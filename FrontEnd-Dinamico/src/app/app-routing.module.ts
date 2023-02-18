import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path:"inicio",component:PortfolioComponent},
  {path:"login", component:LoginComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:"**", component:Page404NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
