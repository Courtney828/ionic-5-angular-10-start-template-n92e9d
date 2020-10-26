import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';

import{HomeComponent}from './home/home.component';
import{RegistrationComponent} from './registration/registration.component';
import{ForgotpasswordComponent}from './forgotpassword/forgotpassword.component';
import { TodolistComponent } from './todolist/todolist.component';
import {CategoryComponent}from './category/category.component';



const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'todolist',component:TodolistComponent},
  {path :'category',component:CategoryComponent },
  

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
