import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DuenoService } from "../services/dueno.service";
import { MascotaService, Mascota } from '../services/mascota.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-mascotas',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule // Importa el módulo HttpClientModule
  ],
  providers: [
    DuenoService, // Provee el servicio aquí
    MascotaService
  ],
  templateUrl: './menu-mascotas.component.html',
  styleUrls: ['./menu-mascotas.component.css']
})
export class MenuMascotasComponent implements OnInit {
  pet: Mascota = {
    id: 0,
    identificacion: 0,
    nombre: '',
    especie: '',
    raza: '',
    fechaNacimiento: '',
    cedulaDueno: 0
  };

  especies: string[] = [
    'Perro',
    'Gato',
    'Conejo',
    'Ave',
    'Reptil',
    'Pez',
    'Hamster',
    'Cobaya',
    'Hurón',
    'Caballo',
    'Cerdo',
    'Cabra',
    'Oveja',
    'Otro'
  ];

  duenos: any[] = []; // Array para almacenar los dueños

  constructor(private duenoService: DuenoService, private mascotaService: MascotaService, private router: Router) { }

  ngOnInit() {
    this.duenoService.findAll().subscribe(data => {
      this.duenos = data;
    });
  }

  onSubmit(): void {
    console.log('Mascota enviada', this.pet);
    this.mascotaService.saveByCC(this.pet, this.pet.cedulaDueno).subscribe(response => {
      alert('Registro exitoso');
      console.log('Mascota guardada', response);
      this.router.navigate(['/menu-principal']);
    }, error => {
      alert('Error, revise la información');
      console.error('Error al guardar la mascota', error);
    });
  }
}
