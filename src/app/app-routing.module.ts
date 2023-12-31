import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './Users/user/user.component';
import { ListComponent } from './Users/list/list.component';
import { DetailsComponent } from './Users/details/details.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch:'full'}, //
  {path:'contact-reactive', component: ContactReactiveComponent},
  {path:'contact-template/:id', component: ContactComponent},
  {path:'home', component: HomeComponent},
  {path:'users', component:UserComponent,
   children:[
    {path:'list', component: ListComponent},
    {path:'details', component: DetailsComponent},
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
