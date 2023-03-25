import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

const router: Routes= [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path: 'moments/new', component: NewMomentComponent},
    {path: 'moments/edit/:id', component: EditMomentComponent},
    {path: 'moments/:id', component: MomentComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutinModule{}