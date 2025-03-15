import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonajesService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http : HttpClient) { }

  public getPersonajes(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

}
