import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './login/login.component';
import { LoginadmiComponent } from './loginadmi/loginadmi.component';


//administrador
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path: 'empresa', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'consultoria', component:SingleComponent},
  {path:'patronaje', component:ServicesComponent},
  {path: 'login', component:LoginComponent},
  {path:'admin', component: AdministradorComponent},
  {path:'ingresar', component: LoginadmiComponent},
  {path: 'admin/inicio', component:AdminInicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
