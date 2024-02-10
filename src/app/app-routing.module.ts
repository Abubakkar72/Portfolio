import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './views/projects/projects.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { SubmittedComponent } from './views/submitted/submitted.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: DashboardComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'submit', component: SubmittedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
