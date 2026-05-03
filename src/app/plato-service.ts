import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plato } from './plato';
import { PlatoMapper } from './plato-mapper';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  private readonly url = 'http://localhost:8080/api/v2/platos';
  private readonly http = inject(HttpClient);

  obtenerPlatos(): Observable<Plato[]> {
    return this.http.get<any>(this.url);
  }

  obtenerPlatoPorId(id: number): Observable<Plato> {
    return this.http.get<Plato>(`${this.url}/${id}`);
  }

insertar(plato: Plato): Observable<Plato> {
  // Usamos el mapper para enviar el formato correcto
  return this.http.post<Plato>(this.url, PlatoMapper.toPostDto(plato));
}

modificar(plato: Plato): Observable<Plato> {
  return this.http.put<Plato>(`${this.url}/${plato.id}`, PlatoMapper.toPutDto(plato));
}

  borrar(id?: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
