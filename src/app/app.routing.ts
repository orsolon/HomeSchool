import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { LinkComponent } from './link/link.component';


const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'home', component: HomeComponent},
    { path:'dashboard', component: DashboardComponent},
    { path: 'horarios', component: HorarioComponent },
    { path: 'link', component: LinkComponent, },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }