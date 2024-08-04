import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {

  constructor(private router: Router) {}

  navigateToUser() {
    this.router.navigate(['/menu-duenos']);
  }

  navigateToPets() {
    this.router.navigate(['/menu-mascotas']);
  }

}
