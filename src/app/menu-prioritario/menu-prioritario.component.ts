import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import {HistoriaClinica, HistoriaClinicaService} from "../services/historia-clinica.service";
import {MascotaService} from "../services/mascota.service";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-menu-prioritario',
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
  templateUrl: './menu-prioritario.component.html',
  styleUrl: './menu-prioritario.component.css'
})
export class MenuPrioritarioComponent implements OnInit {
  historia: HistoriaClinica = {
    id: 0,
    descripcion: 'Servicio Prioritario',
    fecha: '',
    tipoServicio: '',
    mascotaId: 0 // ID de la mascota asociada
  };

  servicios: string[] = [
    'Hospitalizacion',
    'Cirugia',
    'Urgencias'
  ];

  mascotas: any[] = []; // Array para almacenar las mascotas
  historias: HistoriaClinica[] = []; // Array para almacenar historias clínicas

  constructor(
    private historiaClinicaService: HistoriaClinicaService,
    private mascotaService: MascotaService,
    private router: Router
  ) {
  }

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
        descripcion: 'Servicio Prioritario',
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
