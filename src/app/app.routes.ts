import { Routes } from '@angular/router';
import {MenuPrincipalComponent} from "./menu-principal/menu-principal.component";
import {MenuDuenosComponent} from "./menu-duenos/menu-duenos.component";
import {MenuMascotasComponent} from "./menu-mascotas/menu-mascotas.component";

export const routes: Routes = [
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: '/menu-principal', pathMatch: 'full' },
  { path: 'menu-duenos', component: MenuDuenosComponent },
  { path: 'menu-mascotas', component: MenuMascotasComponent }
];
