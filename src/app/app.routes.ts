import { Routes } from '@angular/router';
import {MenuPrincipalComponent} from "./menu-principal/menu-principal.component";
import {MenuDuenosComponent} from "./menu-duenos/menu-duenos.component";
import {MenuMascotasComponent} from "./menu-mascotas/menu-mascotas.component";
import {MenuMedicinaComponent} from "./menu-medicina/menu-medicina.component";
import {MenuHistorialComponent} from "./menu-historial/menu-historial.component";
import {MenuPrioritarioComponent} from "./menu-prioritario/menu-prioritario.component";

export const routes: Routes = [
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: '', redirectTo: '/menu-principal', pathMatch: 'full' },
  { path: 'menu-duenos', component: MenuDuenosComponent },
  { path: 'menu-mascotas', component: MenuMascotasComponent },
  { path: 'menu-medicina', component: MenuMedicinaComponent },
  { path: 'menu-historial', component: MenuHistorialComponent },
  { path: 'menu-prioritario', component: MenuPrioritarioComponent }
];
