import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dueno {
  id: number;
  nombre: string;
  telefono: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DuenoService {
  private apiUrl = 'http://localhost:8080/api/duenos'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) { }

  save(dueno: Dueno): Observable<Dueno> {
    return this.http.post<Dueno>(this.apiUrl, dueno);
  }
}
