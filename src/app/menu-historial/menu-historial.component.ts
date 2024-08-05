import { Component, OnInit } from '@angular/core';
import {Mascota, MascotaService} from "../services/mascota.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {HistoriaClinica, HistoriaClinicaService} from "../services/historia-clinica.service";

@Component({
  selector: 'app-menu-historial',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MascotaService, // Provee el servicio aquí
    HistoriaClinicaService // Usa el servicio de citas
  ],
  templateUrl: './menu-historial.component.html',
  styleUrls: ['./menu-historial.component.css']
})
export class MenuHistorialComponent implements OnInit {
  citas: HistoriaClinica[] = [];
  selectedMascotaId: number | null = null;
  mascotas: Mascota[] = []; // Asegúrate de que sea un array de Mascota

  constructor(
    private mascotaService: MascotaService,
    private historiaClinicaService: HistoriaClinicaService
  ) {
  }

  ngOnInit(): void {
    this.loadMascotas();
  }

  // Método para cargar las mascotas
  loadMascotas(): void {
    this.mascotaService.findAll().subscribe(
      (response: Mascota[]) => {
        this.mascotas = response;
        console.log('Mascotas:', this.mascotas);
      },
      (error) => {
        console.error('Error al obtener las mascotas', error);
      }
    );
  }

  onMascotaSelect(): void {
    if (this.selectedMascotaId !== null) {
      this.historiaClinicaService.findByMascotaId(this.selectedMascotaId).subscribe(
        (response: any) => {
          // Extrae el array de citas desde la propiedad `data`
          this.citas = response.data;

          // Si el array está vacío, asegúrate de que citas esté vacío
          if (this.citas.length === 0) {
            this.citas = []; // Esto asegura que citas se vacíe si no hay citas
          }

          console.log('Citas:', this.citas); // Verifica el contenido de citas
        },
        (error) => {
          console.error('Error al obtener historias clínicas', error);
          this.citas = []; // Vacía las citas en caso de error
        }
      );
    }
  }
}
