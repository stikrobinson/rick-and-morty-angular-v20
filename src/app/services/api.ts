import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ApiResponse, Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character'; 

  private readonly http = inject(HttpClient);

  private charactersSignal = signal<Character[]>([]); // Señal privada inicializada vacía

  public readonly characters = this.charactersSignal.asReadonly(); // Señal pública de solo lectura

  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL).pipe(
      tap((response: ApiResponse): void => this.charactersSignal.set(response.results))
    );;
  }

  searchCharacters(name: string): Observable<ApiResponse> {
    const vacio = name.trim() === '';
    if(vacio){
      return this.getCharacters();
    }
    const url = `${this.API_URL}/?name=${name}`; 
    return this.http.get<ApiResponse>(url).pipe(
      tap((response: ApiResponse): void => this.charactersSignal.set(response.results))
    );;
  }
}
