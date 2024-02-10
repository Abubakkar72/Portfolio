import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmittedComponent } from './submitted/submitted.component';


@NgModule({
  declarations: [ 
    NavbarComponent,
    AboutComponent,
    DashboardComponent,
    ProjectsComponent,
    CertificatesComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    SubmittedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    DashboardComponent,
    ProjectsComponent,
    CertificatesComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    SubmittedComponent
  ]
})
export class HomeModule { }
