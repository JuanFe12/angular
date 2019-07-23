import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AddItemComponent } from './componentes/add-item/add-item.component';
//TODO: Ajustar detalles de las rutas y proteger la ruta de inicio.
const routes: Routes = [
  { path: 'navbar/:buscarTexto', component: NavbarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'add-item', component: AddItemComponent},
  { path: 'busqueda/:buscarTexto', component: BusquedaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
