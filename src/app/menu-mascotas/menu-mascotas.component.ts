import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-menu-mascotas',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
  templateUrl: './menu-mascotas.component.html',
  styleUrl: './menu-mascotas.component.css'
})
export class MenuMascotasComponent {
  pet = {
    id: 0,
    nombre: '',
    especie: '',
    raza: '',
    fechaNacimiento: ''
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

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Mascota: ', this.pet);
  }

}
