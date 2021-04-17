import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { LoginComponent } from './views/login/login.component';
import { TasksComponent } from './views/tasks/tasks.component';


const routes: Routes = [
    { path:'login', component: LoginComponent},
    { path:'home', component: HomeComponent},
    { path:'dashboard', component: DashboardComponent},
    { path: 'horarios', component: HorarioComponent },
    { path: 'tasks', component: TasksComponent, },
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: '**', redirectTo: 'login'}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }