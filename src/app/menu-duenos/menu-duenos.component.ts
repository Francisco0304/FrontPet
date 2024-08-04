import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {Dueno, DuenoService} from '../services/dueno.service';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-duenos',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule, // Importa HttpClientModule aquí
    CommonModule // Importa CommonModule para características comunes de Angular
  ],
  providers: [
    DuenoService // Provee el servicio aquí
  ],
  templateUrl: './menu-duenos.component.html',
  styleUrls: ['./menu-duenos.component.css'] // Cambia `styleUrl` a `styleUrls`
})
export class MenuDuenosComponent implements OnInit {
  user = {
    id: 0,
    cedula: 0,
    nombre: '',
    telefono: '',
    direccion: ''
  };

  users: Dueno[] = [];

  constructor(private duenoService: DuenoService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.duenoService.findAll().subscribe(
      users => this.users = users,
      error => console.error('Error al obtener los usuarios', error)
    );
  }

  onSubmit(): void {
    console.log('Usuario enviado', this.user);
    this.duenoService.save(this.user).subscribe(response => {
      alert('Registro exitoso');
      console.log('Usuario guardado', response);
      this.router.navigate(['/menu-principal']);
    }, error => {
      alert('Error, revise la informacion');
      console.error('Error al guardar el usuario', error);
    });
  }
}
