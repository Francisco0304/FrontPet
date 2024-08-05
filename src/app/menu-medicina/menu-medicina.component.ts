import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HistoriaClinicaService, HistoriaClinica } from '../services/historia-clinica.service';
import { MascotaService } from '../services/mascota.service';
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe} from "@angular/common";
import {DuenoService} from "../services/dueno.service";

@Component({
  selector: 'app-menu-medicina',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DatePipe
  ],
  providers: [
    MascotaService, // Provee el servicio aquí
    HistoriaClinicaService
  ],
  templateUrl: './menu-medicina.component.html',
  styleUrl: './menu-medicina.component.css'
})
export class MenuMedicinaComponent implements OnInit {
  historia: HistoriaClinica = {
    id: 0,
    descripcion: 'Servicio Básico',
    fecha: '',
    tipoServicio: '',
    mascotaId: 0 // ID de la mascota asociada
  };

  servicios: string[] = [
    'Desparasitación',
    'Vacunación',
    'Esterilización',
    'Otro'
  ];

  mascotas: any[] = []; // Array para almacenar las mascotas
  historias: HistoriaClinica[] = []; // Array para almacenar historias clínicas

  constructor(
    private historiaClinicaService: HistoriaClinicaService,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.mascotaService.findAll().subscribe(data => {
      this.mascotas = data;
    });
    this.historiaClinicaService.findAll().subscribe(data => {
      this.historias = data;
    });
  }

  onSubmit(): void {
    this.historiaClinicaService.save(this.historia, this.historia.mascotaId).subscribe(response => {
      alert('Historia Clínica registrada exitosamente');
      this.historia = {
        id: 0,
        descripcion: 'Servicio Basico',
        fecha: '',
        tipoServicio: '',
        mascotaId: 0
      };
      this.historiaClinicaService.findAll().subscribe(data => {
        this.historias = data;
      });
      this.router.navigate(['/menu-principal']);
    }, error => {
      alert('Error al registrar la historia clínica');
      console.error('Error al guardar la historia clínica', error);
    });
  }

}
