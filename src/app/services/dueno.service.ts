import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dueno {
  id: number;
  cedula: number;
  nombre: string;
  telefono: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DuenoService {
  private apiUrl = 'http://localhost:8080/duenos'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) { }

  save(dueno: Dueno): Observable<Dueno> {
    return this.http.post<Dueno>(this.apiUrl, dueno);
  }

  findAll(): Observable<Dueno[]> {
    return this.http.get<Dueno[]>(this.apiUrl);
  }
}
