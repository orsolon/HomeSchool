import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { LinkComponent } from './link/link.component';
import { DemoMaterialModule } from './material.module';
import { AuthenticationService } from './services/mock/authentication.service';
import { LoginComponent } from './views/login/login.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { SerieSelectedComponent } from './dashboard/serie-selected/serie-selected.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    HorarioComponent,
    LinkComponent,
    LoginComponent,
    TasksComponent,
    ListarAlunosComponent,
    SerieSelectedComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [
    AuthenticationService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
