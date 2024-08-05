import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mascota {
  id: number;
  identificacion: number;
  nombre: string;
  especie: string;
  raza: string;
  fechaNacimiento: string;
  cedulaDueno: number;
}

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:8080/mascotas'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) { }

  saveByCC(mascota: Mascota, cedula: number): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.apiUrl}/saveByCC/${cedula}`, mascota);
  }

  findById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.apiUrl}/${id}`);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
