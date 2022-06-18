import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterApiRespone } from '../interface/character'
import { environment } from 'src/environments/environment';
import { LocationsData } from '@app/interface/locations';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacters(query = ''): Observable<CharacterApiRespone> {
    return this.http.get<CharacterApiRespone>(`${environment.baseUrlAPI}/?name=${query}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`);
  }

  getLocations(query = ''): Observable<LocationsData> {
    return this.http.get<LocationsData>(`${environment.baseUrlLoactions}/?name=${query}`);
  }
}