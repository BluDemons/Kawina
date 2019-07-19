import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path: 'empresa', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'services', component:ServicesComponent},
  {path:'single', component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
