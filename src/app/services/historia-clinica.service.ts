import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HistoriaClinica {
  id?: number;
  descripcion: string;
  fecha: string;
  tipoServicio: string;
  mascotaId: number; // ID de la mascota asociada
}

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  private apiUrl = 'http://localhost:8080/historias-clinicas'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) { }

  save(historiaClinica: HistoriaClinica, mascotaId: number): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(`${this.apiUrl}/${mascotaId}`, historiaClinica);
  }

  findAll(): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(this.apiUrl);
  }

  findById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.apiUrl}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Nuevo método para obtener todas las historias clínicas asociadas a un ID de mascota
  findByMascotaId(mascotaId: number): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(`${this.apiUrl}/mascota/${mascotaId}`);
  }
}
